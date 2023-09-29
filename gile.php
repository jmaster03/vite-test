<?php
// Obtener la URL del producto
$url = "https://www.aliexpress.com/item/1234567890.html";

// Obtener el contenido HTML de la página
$html = file_get_contents($url);

// Crear un nuevo objeto DOMDocument
$doc = new DOMDocument();

// Deshabilitar los errores de HTML
libxml_use_internal_errors(true);

// Cargar el contenido HTML en el objeto DOMDocument
$doc->loadHTML($html);

// Crear un nuevo objeto stdClass para almacenar los datos
$product = new stdClass();

// Obtener el nombre del producto
$product->name = $doc->getElementById("product-name")->textContent;

// Obtener la cantidad del producto
$product->quantity = $doc->getElementById("product-quantity")->textContent;

// Obtener la categoría del producto
$category_links = $doc->getElementById("ae-breadcrumb")->getElementsByTagName("a");
$category_names = array();
foreach ($category_links as $link) {
    $category_names[] = $link->textContent;
}
$product->category = implode(" > ", $category_names);

// Obtener el color del producto (si está disponible)
$color_options = $doc->getElementById("product-colorway-wrap");
if ($color_options) {
    $color_inputs = $color_options->getElementsByTagName("input");
    foreach ($color_inputs as $input) {
        if ($input->getAttribute("checked")) {
            $product->color = $input->getAttribute("data-sku-prop-value");
            break;
        }
    }
}

// Devolver los datos como JSON
header("Content-Type: application/json");
echo json_encode($product);
?>
