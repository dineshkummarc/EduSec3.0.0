<<<<<<< HEAD
<?php
class DataFilterXHTML2XHTML extends DataFilter {
  function process(&$data) {
    $data->set_content(xhtml2xhtml($data->get_content()));
    return $data;
  }
}
=======
<?php
class DataFilterXHTML2XHTML extends DataFilter {
  function process(&$data) {
    $data->set_content(xhtml2xhtml($data->get_content()));
    return $data;
  }
}
>>>>>>> repo-a/master
?>