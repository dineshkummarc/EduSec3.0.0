<?php
// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
include realpath('dbConfig/dbconf.php');
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'EduSec College Management System',
	'theme'=>'EduSec',
	
	// preloading 'log' component
	'preload'=>array('log'),

	// autoloading model and component classes
	'import'=>array(
		'application.models.*',
		'application.extensions.jtogglecolumn.*',
		
		'application.extensions.AjaxList.AjaxList',
		'application.components.*',

		'application.modules.rights.*',
		'application.modules.rights.components.*',
		
		'application.extensions.EMailTemplate.EMailTemplate',
		'application.modules.student.models.*',
		'application.modules.employee.models.*',
		'application.modules.fees.models.*',
		'application.extensions.EAjaxUpload.*',
		 'application.modules.notification.models.*',
		'application.modules.mailbox.*',
		'application.modules.mailbox.models.*',
		'application.modules.backup.models.*',
		'application.extensions.html2pdf.*',
		'application.extensions.crontab.*',
			
	),
		
	'modules'=>array(
		// uncomment the following to enable the Gii tool
		
		'gii'=>array(
			'class'=>'system.gii.GiiModule',
			'password'=>'secure',
			'generatorPaths'=>array(
					'ext.gii-extended',
				),
		 	// If removed, Gii defaults to localhost only. Edit carefully to taste.
			'ipFilters'=>array('127.0.0.1','::1','192.168.0.153','192.168.0.154,192.168.1.101'),
		),
		'backup',
		'fees',
		'employee',
		'student',
		'rights'=>array(
			'install'=>false,
			'superuserName'=>'SuperAdmin',
			'authenticatedName'=>'Authenticated',
			'userIdColumn'=>'user_id',
			'userNameColumn'=>'user_organization_email_id',
			'enableBizRule'=>false,
			'enableBizRuleData'=>false,
			'displayDescription'=>true,
			'flashSuccessKey'=>'RightsSuccess',
			'flashErrorKey'=>'RightsError',
			'baseUrl'=>'/rights',
			'cssFile'=>'rights.css',
			'debug'=>false,
			),
	'mailbox'=>
		    array(  
		    'userClass' => 'User',
		    'userIdColumn' => 'user_id',
		    'usernameColumn' => 'user_organization_email_id',
		    'newsUserId' => 'admin@rudrasoftech.com',
		      ),
	),

	// application components
	'components'=>array(
	
	'ePdf' => array(
                          'class'=> 'ext.mpdf.EYiiPdf',
        		  'params'=> array(
                	                  'mpdf'=> array(
                			  'librarySourcePath' => 'application.extensions.mpdf.mpdf.*',
                			  'constants'=> array(
                    					'_MPDF_TEMP_PATH' => Yii::getPathOfAlias('application.runtime'),
                					),
                			  'class'=>'mpdf', 
            					),
           
        				),
    			  ),

		
		'user'=>array(
			// enable cookie-based authentication
			'allowAutoLogin'=>true,
			'class'=>'RWebUser',
		),

		'phpThumb'=>array(
		    'class'=>'ext.EPhpThumb.EPhpThumb',
		    
		),

		'authManager'=>array(
		'class'=>'RDbAuthManager',
		),
		
		
		'urlManager'=>array(
			'urlFormat'=>'path',
			'rules'=>array(
		
				
			 'gii'=>'gii',
		         'gii/<controller:\w+>'=>'gii/<controller>',
		         'gii/<controller:\w+>/<action:\w+>'=>'gii/<controller>/<action>',

			//'<controller:(c1|c2|c3|gii)/>/<action:\w+>' => '<controller>/<action>',	
			'<controller:\w+>/<id:\d+>'=>'<controller>/view',
			'<controller:\w+>/<action:\w+>/<id:\d+>/*'=>'<controller>/<action>',

			'<controller:\w+>/<action:\w+>'=>'<controller>/<action>', 
                        
                         array('webservice/api/login', 'pattern'=>'webservice/api/<model:\w+>', 'verb'=>'POST'),				
			 array('webservice/api/list', 'pattern'=>'webservice/api/<model:\w+>/<uid:\d+>', 'verb'=>'GET'),
			 array('webservice/api/view', 'pattern'=>'webservice/api/<model:\w+>/<id:\d+>/<uid:\d+>', 'verb'=>'GET'),
			 array('webservice/api/update', 'pattern'=>'webservice/api/<model:\w+>/<id:\d+>', 'verb'=>'PUT'),
			 array('webservice/api/delete', 'pattern'=>'webservice/api/<model:\w+>/<id:\d+>', 'verb'=>'DELETE'),
			 array('webservice/api/create', 'pattern'=>'webservice/api/<model:\w+>', 'verb'=>'POST'),       		
			
        
			'<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
			'<module:\w+>/<controller:\w+>/<action:\w+>'=>'<module>/<controller>/<action>',


			),
			'showScriptName'=>false,
		),

	
		'db'=>array(
			'connectionString'=>'mysql:host='.$host.';dbname='.$dbName,
			'emulatePrepare' => true,
			'username' => $userName,
			'password' => $passWord,
			'charset' => 'utf8',	
			'tablePrefix' => 'tbl_',		
		),

		'errorHandler'=>array(
			// use 'site/error' action to display errors
				    'errorAction'=>'site/error',
				),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
					'categories'=>'system.*',

				),

			),
		),
	),

	// application-level parameters that can be accessed
	// using Yii::app()->params['paramName']
	'params'=>array(
               // this is used in contact page
               'adminEmail'=>'webmaster@example.com',
               'pageSize'=>10,
               'webRoot' => dirname(dirname(__FILE__).DIRECTORY_SEPARATOR.'..')
       ),
);
