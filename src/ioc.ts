import {container} from 'tsyringe';
import {IocSymbols} from './symbols';
import {GithubReleaseService, IGithubReleaseService} from './services/GithubReleaseService';
import {CliDownloadService, ICliDownloadService} from './services/CliDownloadService';
import {CycodeService, ICycodeService} from './services/CycodeService';
import {ILoggerService, LoggerService} from './services/LoggerService';
import {IScanResultsService, ScanResultsService} from './services/ScanResultsService';
import {IStateService, StateService} from './services/StateService';
import {CliService, ICliService} from './services/CliService';
import {DownloadService, IDownloadService} from './services/DownloadService';

container.registerSingleton<ILoggerService>(IocSymbols.LoggerServiceSymbol, LoggerService);
container.registerSingleton<IDownloadService>(IocSymbols.DownloadServiceSymbol, DownloadService);
container.registerSingleton<IGithubReleaseService>(IocSymbols.GithubReleaseServiceSymbol, GithubReleaseService);
container.registerSingleton<ICliDownloadService>(IocSymbols.CliDownloadServiceSymbol, CliDownloadService);
container.registerSingleton<ICycodeService>(IocSymbols.CycodeServiceSymbol, CycodeService);
container.registerSingleton<ICliService>(IocSymbols.CliServiceSymbol, CliService);
container.registerSingleton<IScanResultsService>(IocSymbols.ScanResultsServiceSymbol, ScanResultsService);
container.registerSingleton<IStateService>(IocSymbols.StateServiceSymbol, StateService);
