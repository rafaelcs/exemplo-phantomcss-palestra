/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/
var phantomcss = require('./../phantomcss.js');

phantomcss.init(
/*{
	screenshotRoot: '/screenshots',
	failedComparisonsRoot: '/failures'
	casper: specific_instance_of_casper,
	libraryRoot: '/phantomcss',
	fileNameGetter: function overide_file_naming(){},
	onPass: function passCallback(){},
	onFail: function failCallback(){},
	onTimeout: function timeoutCallback(){},
	onComplete: function completeCallback(){},
	hideElements: '#thing.selector',
	addLabelToFailedImage: true,
	outputSettings: {
		errorColor: {
			red: 255,
			green: 255,
			blue: 0
		},
		errorType: 'movement',
		transparency: 0.3
	},
	mismatchTolerance: 0.05
}*/);


/*
	The test scenario
*/
casper.start( './testes/maquinadecafe.html' );

casper.viewport(1024, 768);

casper.then(function(){
	phantomcss.screenshot('body', '1 - Botão da máquina de café');
});

casper.then(function(){
	casper.click('#btn-maquina-cafe');
	
	// wait for modal to fade-in 
	casper.waitForSelector('#modal:not([style*="display: none"])',
		function(){
			phantomcss.screenshot('#modal', '2 - Janela da máquina de café');
		}
	);
});

casper.then(function(){
	casper.click('#btn-cappuccino');
	phantomcss.screenshot('#modal', '3 - Cappuccino com sucesso');
});

casper.then(function(){
	casper.click('#fechar');

	// wait for modal to fade-out
	casper.waitForSelector('#modal[style*="display: none"]',
		function(){
			phantomcss.screenshot('body', '4 - Máquina de café fechada com sucesso');
		}
	);
});

casper.then( function comparar_screenshots(){
	// compare screenshots
	phantomcss.compareAll();
});

casper.then( function done(){
	casper.test.done();
});

/*
Casper runs tests
*/
casper.run(function(){
	console.log('\nTHE END.');
	phantom.exit(phantomcss.getExitStatus());
});

