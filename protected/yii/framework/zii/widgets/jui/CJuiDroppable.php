<<<<<<< HEAD
<?php
/**
 * CJuiDroppable class file.
 *
 * @author Sebastian Thierer <sebathi@gmail.com>
 * @link http://www.yiiframework.com/
 * @copyright Copyright &copy; 2008-2011 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

Yii::import('zii.widgets.jui.CJuiWidget');

/**
 * CJuiDroppable displays a droppable widget.
 *
 * CJuiDroppable encapsulates the {@link http://jqueryui.com/demos/droppable/ JUI Droppable}
 * plugin.
 *
 * To use this widget, you may insert the following code in a view:
 * <pre>
 * $this->beginWidget('zii.widgets.jui.CJuiDroppable', array(
 *     // additional javascript options for the droppable plugin
 *     'options'=>array(
 *         'scope'=>'myScope',
 *     ),
 * ));
 *     echo 'Your droppable content here';
 *
 * $this->endWidget();
 *
 * </pre>
 *
 * By configuring the {@link options} property, you may specify the options
 * that need to be passed to the JUI Droppable plugin. Please refer to
 * the {@link http://jqueryui.com/demos/droppable/ JUI Droppable} documentation
 * for possible options (name-value pairs).
 *
 * @author Sebastian Thierer <sebathi@gmail.com>
 * @version $Id: CJuiDroppable.php 2799 2011-01-01 19:31:13Z qiang.xue $
 * @package zii.widgets.jui
 * @since 1.1
 */
class CJuiDroppable extends CJuiWidget
{
	/**
	 * @var string the HTML tag name of the Droppable element. Defaults to 'div'.
	 */
	public $tagName='div';

	/**
	 * Renders the open tag of the droppable element.
	 * This method also registers the necessary javascript code.
	 */
	public function init()
	{
		parent::init();
		$id=$this->getId();
		if (isset($this->htmlOptions['id']))
			$id = $this->htmlOptions['id'];
		else
			$this->htmlOptions['id']=$id;

		echo CHtml::openTag($this->tagName,$this->htmlOptions)."\n";
		
		$options=empty($this->options) ? '' : CJavaScript::encode($this->options);
		Yii::app()->getClientScript()->registerScript(__CLASS__.'#'.$id,"jQuery('#{$id}').droppable($options);");
	}

	/**
	 * Renders the close tag of the droppable element.
	 */
	public function run(){
		echo CHtml::closeTag($this->tagName);
	}

}


=======
<?php
/**
 * CJuiDroppable class file.
 *
 * @author Sebastian Thierer <sebathi@gmail.com>
 * @link http://www.yiiframework.com/
 * @copyright Copyright &copy; 2008-2011 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

Yii::import('zii.widgets.jui.CJuiWidget');

/**
 * CJuiDroppable displays a droppable widget.
 *
 * CJuiDroppable encapsulates the {@link http://jqueryui.com/demos/droppable/ JUI Droppable}
 * plugin.
 *
 * To use this widget, you may insert the following code in a view:
 * <pre>
 * $this->beginWidget('zii.widgets.jui.CJuiDroppable', array(
 *     // additional javascript options for the droppable plugin
 *     'options'=>array(
 *         'scope'=>'myScope',
 *     ),
 * ));
 *     echo 'Your droppable content here';
 *
 * $this->endWidget();
 *
 * </pre>
 *
 * By configuring the {@link options} property, you may specify the options
 * that need to be passed to the JUI Droppable plugin. Please refer to
 * the {@link http://jqueryui.com/demos/droppable/ JUI Droppable} documentation
 * for possible options (name-value pairs).
 *
 * @author Sebastian Thierer <sebathi@gmail.com>
 * @version $Id: CJuiDroppable.php 2799 2011-01-01 19:31:13Z qiang.xue $
 * @package zii.widgets.jui
 * @since 1.1
 */
class CJuiDroppable extends CJuiWidget
{
	/**
	 * @var string the HTML tag name of the Droppable element. Defaults to 'div'.
	 */
	public $tagName='div';

	/**
	 * Renders the open tag of the droppable element.
	 * This method also registers the necessary javascript code.
	 */
	public function init()
	{
		parent::init();
		$id=$this->getId();
		if (isset($this->htmlOptions['id']))
			$id = $this->htmlOptions['id'];
		else
			$this->htmlOptions['id']=$id;

		echo CHtml::openTag($this->tagName,$this->htmlOptions)."\n";
		
		$options=empty($this->options) ? '' : CJavaScript::encode($this->options);
		Yii::app()->getClientScript()->registerScript(__CLASS__.'#'.$id,"jQuery('#{$id}').droppable($options);");
	}

	/**
	 * Renders the close tag of the droppable element.
	 */
	public function run(){
		echo CHtml::closeTag($this->tagName);
	}

}


>>>>>>> repo-a/master
