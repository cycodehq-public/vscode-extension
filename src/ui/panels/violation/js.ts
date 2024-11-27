import scaRenderer from './renderer/sca';
import secretRenderer from './renderer/secret';
import iacRenderer from './renderer/iac';
import sastRenderer from './renderer/sast';
import { CliScanType } from '../../../cli/models/cli-scan-type';
import { container } from 'tsyringe';
import { IStateService } from '../../../services/state-service';
import { StateServiceSymbol } from '../../../symbols';

const isAiEnabled = () => {
  const stateService = container.resolve<IStateService>(StateServiceSymbol);
  return stateService.globalState.IsAiLargeLanguageModelEnabled;
};

export default (detectionType: CliScanType) => `
<script>
    const vscode = acquireVsCodeApi();
    const prevState = vscode.getState();

    const isAiEnabled = ${isAiEnabled()};

    let severityIcons = (prevState && prevState.severityIcons) || undefined;
    let detection = (prevState && prevState.detection) || undefined; 
    let uniqueDetectionId = (prevState && prevState.uniqueDetectionId) || undefined;
    let aiRemediation = undefined; 

    const ge = className => document.getElementsByClassName(className)[0];

    const hideElement = className => {
      const element = ge(className);
      if (element && !element.className.includes('hidden')) {
          element.className += ' hidden';
      }
    };

    const showElement = className => {
      const element = ge(className);
      if (element) {
          element.className = element.className.replace(' hidden', '');
      }
    };

    const getCweCveLink = cweCve => {
      if (!cweCve || typeof cweCve !== 'string') {
          return undefined;
      }

      if (cweCve.startsWith('GHSA')) {
          return 'https://github.com/advisories/' + cweCve;
      } else if (cweCve.startsWith('CWE')) {
          const cweNumber = parseInt(cweCve.split('-')[1]);
          return 'https://cwe.mitre.org/data/definitions/' + cweNumber;
      } else if (cweCve.startsWith('CVE')) {
          return 'https://cve.mitre.org/cgi-bin/cvename.cgi?name=' + cweCve;
      } else {
          return undefined;
      }
    };

    const renderCweCveLink = cweCve => {
      const link = getCweCveLink(cweCve);
      if (link) {
          return \`<a href="\${link}" target="_blank" rel="noopener noreferrer">\${cweCve}</a>\`;
      } else {
          return cweCve;
      }
    };
    
    const resetAiElements = () => {
      if (isAiEnabled) {
        showElement('ai-remediation-btn');
      } else {
        hideElement('ai-remediation-btn');
      }

      hideElement('ai-apply-fix-btn');
      hideElement('ai-remediation');
      ge('ai-remediation-text').innerText = 'None';
    }

    const renderAiRemediation = (remediation, isFixAvailable) => {
      hideElement('ai-remediation-btn');
      showElement('ai-remediation');
      ge('ai-remediation-text').innerHTML = remediation;

      if (isFixAvailable) {
        showElement('ai-apply-fix-btn');
      }
    };

    const registerAiButtonCallbacks = () => {
      ge('ai-remediation-btn').onclick = () => {
        vscode.postMessage({ command: 'getAiRemediation', uniqueDetectionId });
      };
    }
</script>
    ${detectionType === CliScanType.Sca ? scaRenderer : ''}
    ${detectionType === CliScanType.Secret ? secretRenderer : ''}
    ${detectionType === CliScanType.Iac ? iacRenderer : ''}
    ${detectionType === CliScanType.Sast ? sastRenderer : ''}
<script>
    if (severityIcons && detection) {
        renderDetection(detection);
    }

    const updateState = () => {
        vscode.setState({ severityIcons, detection, uniqueDetectionId });
    };

    const messageHandler = event => {
        const message = event.data;

        if (message.uniqueDetectionId) {
            uniqueDetectionId = message.uniqueDetectionId;
        }
        if (message.severityIcons) {
            severityIcons = message.severityIcons;
        }
        if (message.detection) {
            detection = message.detection;
            aiRemediation = undefined;  // reset AI remediation when detection changes
        }
        if (message.aiRemediation) {
            aiRemediation = message.aiRemediation;
        }

        updateState();

        if (renderDetection && severityIcons && detection) {
            renderDetection(detection);
        }

        if (aiRemediation) {
            renderAiRemediation(aiRemediation.remediation, aiRemediation.isFixAvailable);
        }
    };

    window.addEventListener('message', messageHandler);
    window.onload = () => {
        vscode.postMessage({
            command: 'ready',
        });
    }
</script>
`;
