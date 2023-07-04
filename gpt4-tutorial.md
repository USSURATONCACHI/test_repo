# Q
Hello, i have a static html + css + js page in my local files and i want to create a static page in Drupal 8. The only thing i want is that the static landing page should be accessible on my site by some url. For example, practi.cum/main (practi.cum is my domain name). And it should look exactly as in the local files template.

It has fully custom html + css + js and idk what is the simplest way to add a fully custom page in drupal 8

# A

To create a fully custom static page in Drupal 8, you can follow these steps:

* Create a custom module:

First, create a custom module to handle your static page. In your Drupal installation, navigate to the 
`modules`
 folder and create a new folder called 
`custom_static_page`
. Inside this folder, create two files: 
`custom_static_page.info.yml`
 and 
`custom_static_page.routing.yml`
.

* Define your custom module:
Edit the 
`custom_static_page.info.yml`
 file and add the following content:

```yml
name: Custom Static Page
type: module
description: A custom static page with HTML, CSS, and JS.
core: 8.x
package: Custom
```
* Define the routing:
Edit the 
`custom_static_page.routing.yml`
 file and add the following content:

```yml
custom_static_page.main:
  path: '/main'
  defaults:
    _controller: '\Drupal\custom_static_page\Controller\StaticPageController::content'
    _title: 'Custom Static Page'
  requirements:
    _permission: 'access content'
```
* Create the controller:
Inside the 
`custom_static_page`
 folder, create a new folder called 
`src`
. Inside the 
`src`
 folder, create another folder called 
`Controller`
. Inside the 
`Controller`
 folder, create a file called 
`StaticPageController.php`
 and add the following content:

```php
<?php

namespace Drupal\custom_static_page\Controller;

use Drupal\Core\Controller\ControllerBase;

class StaticPageController extends ControllerBase {

  public function content() {
    return [
      '#theme' => 'custom_static_page',
    ];
  }

}
```

* Create the template:

Inside the 
`custom_static_page`
 folder, create a new folder called 
`templates`
. Inside the 
`templates`
 folder, create a file called 
`custom-static-page.html.twig`
 and add your custom HTML content. Make sure to include your CSS and JS files using the appropriate Twig syntax:

```twig
{# Include your CSS file #}
{{ attach_library('custom_static_page/custom_static_page_styles') }}

{# Include your JS file #}
{{ attach_library('custom_static_page/custom_static_page_scripts') }}

{# Add your custom HTML content here #}
```

* Define your assets:

Inside the 
`custom_static_page`
 folder, create a new file called 
`custom_static_page.libraries.yml`
 and add the following content:

```yml
custom_static_page_styles:
  css:
    theme:
      css/your-styles.css: {}

custom_static_page_scripts:
  js:
    js/your-scripts.js: {}
  dependencies:
    - core/jquery
    - core/drupal
```

Make sure to replace 
`your-styles.css`
 and 
`your-scripts.js`
 with the actual names of your CSS and JS files.

* Add your assets:

Inside the 
`custom_static_page`
 folder, create two new folders called 
`css`
 and 
`js`
. Place your CSS file in the 
`css`
 folder and your JS file in the 
`js`
 folder.

* Enable the custom module:

Go to your Drupal admin area, navigate to the "Extend" page, and enable the "Custom Static Page" module.

* Clear the cache:

Clear your Drupal cache by going to the "Configuration" page, then "Performance", and click on "Clear all caches".

Now, you should be able to access your custom static page at 
`practi.cum/main`
. Make sure to replace 
`practi.cum`
 with your actual domain name.

# Q

Convert this tutorial into a sequence of powershell commands. Use `cd` for navidation, `mkdir` to create folders, `New-Item` to create files and just plain code-snippets for me to insert into files.

# A

Here's the sequence of PowerShell commands to create a custom static page in Drupal 8:

Navigate to the 
`modules`
 folder in your Drupal installation:
```powershell
cd path\to\your\drupal\modules
```
Create a new folder called 
`custom_static_page`
 and navigate into it:
```powershell
mkdir custom_static_page
cd custom_static_page
```
Create the 
`custom_static_page.info.yml`
 and 
`custom_static_page.routing.yml`
 files:
```powershell
New-Item custom_static_page.info.yml
New-Item custom_static_page.routing.yml
```
Add the following content to 
`custom_static_page.info.yml`
:
```yml
name: Custom Static Page
type: module
description: A custom static page with HTML, CSS, and JS.
core: 8.x
package: Custom
```
Add the following content to 
`custom_static_page.routing.yml`
:
```yml
custom_static_page.main:
  path: '/main'
  defaults:
    _controller: '\Drupal\custom_static_page\Controller\StaticPageController::content'
    _title: 'Custom Static Page'
  requirements:
    _permission: 'access content'
```
Create the 
`src`
 and 
`Controller`
 folders:
 
```powershell
mkdir src\Controller
```
Create the 
`StaticPageController.php`
 file:
```powershell
New-Item src\Controller\StaticPageController.php
```
Add the following content to 
`StaticPageController.php`
:
```php
<?php

namespace Drupal\custom_static_page\Controller;

use Drupal\Core\Controller\ControllerBase;

class StaticPageController extends ControllerBase {

  public function content() {
    return [
      '#theme' => 'custom_static_page',
    ];
  }

}
``
Create the 
`templates`
 folder and the 
`custom-static-page.html.twig`
 file:

```powershell
mkdir templates
New-Item templates\custom-static-page.html.twig
```
Add your custom HTML content to 
`custom-static-page.html.twig`
. Make sure to include your CSS and JS files using the appropriate Twig syntax:
```twig
{# Include your CSS file #}
{{ attach_library('custom_static_page/custom_static_page_styles') }}

{# Include your JS file #}
{{ attach_library('custom_static_page/custom_static_page_scripts') }}

{# Add your custom HTML content here #}
```
Create the 
`custom_static_page.libraries.yml`
 file:
```powershell
New-Item custom_static_page.libraries.yml
```
Add the following content to 
`custom_static_page.libraries.yml`
:
```yml
custom_static_page_styles:
  css:
    theme:
      css/your-styles.css: {}

custom_static_page_scripts:
  js:
    js/your-scripts.js: {}
  dependencies:
    - core/jquery
    - core/drupal
```
Make sure to replace 
`your-styles.css`
 and 
`your-scripts.js`
 with the actual names of your CSS and JS files.

Create the 
`css`
 and 
`js`
 folders:
```powershell
mkdir css
mkdir js
```
Add your CSS and JS files to the 
`css`
 and 
`js`
 folders, respectively.

Enable the custom module and clear the cache using Drupal's admin interface.

Now, you should be able to access your custom static page at 
`practi.cum/main`
. Make sure to replace 
`practi.cum`
 with your actual domain name.

# Q

Yeah, its my actual domain name. But right now at practi.cum/main i only see default drupal page with "Custom Static Page" header on it and no custom html. What might be an issue? How exactly should i add html to .twig file?

# A

I apologize for the confusion. It seems that the custom theme hook is not being registered. To fix this issue, you need to implement 
`hook_theme()`
 in your custom module. Follow these steps:

Create a new file called 
`custom_static_page.module`
 inside the 
`custom_static_page`
 folder:
```powershell
New-Item custom_static_page.module
```
Add the following content to 
`custom_static_page.module`
:
```php
<?php

/**
 * Implements hook_theme().
 */
function custom_static_page_theme($existing, $type, $theme, $path) {
  return [
    'custom_static_page' => [
      'template' => 'custom-static-page',
      'path' => $path . '/templates',
    ],
  ];
}
```
Clear the cache:
Clear your Drupal cache by going to the "Configuration" page, then "Performance", and click on "Clear all caches".

Now, your custom HTML should be displayed on the 
`practi.cum/main`
 page. To add custom HTML to the 
`.twig`
 file, open the 
`custom-static-page.html.twig`
 file and insert your HTML code where it says 
`{# Add your custom HTML content here #}`
. For example:

```twig
{# Include your CSS file #}
{{ attach_library('custom_static_page/custom_static_page_styles') }}

{# Include your JS file #}
{{ attach_library('custom_static_page/custom_static_page_scripts') }}

{# Add your custom HTML content here #}
<div class="custom-container">
  <h1>Welcome to the Custom Static Page</h1>
  <p>This is an example of a custom static page in Drupal 8.</p>
</div>
```
Replace the example HTML code with your own custom HTML content. Make sure to save the file and clear the cache again to see the changes on your website.

# Q

Wow, its great, it works! You are awesome! But i also see like default drupal elements (blocks? idk how its called) - search box, header, footer, title of my page etc. How do i remove or hide them?

# A

I'm glad it's working for you! To remove or hide the default Drupal elements (such as blocks, header, footer, and title) from your custom static page, you can create a custom page template specifically for your static page. Follow these steps:

Implement 
`hook_theme_suggestions_page_alter()`
 in your 
`custom_static_page.module`
 file:
Add the following function to the 
`custom_static_page.module`
 file:

```php
/**
 * Implements hook_theme_suggestions_page_alter().
 */
function custom_static_page_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  if (\Drupal::routeMatch()->getRouteName() == 'custom_static_page.main') {
    $suggestions[] = 'page__custom_static_page';
  }
}
```
Create a new Twig template file for the custom page:

Copy the 
`page.html.twig`
 file from your current theme's 
`templates`
 folder (or from the 
`core/themes/classy/templates/layout`
 folder if you're using a Classy-based theme) and paste it into your custom module's 
`templates`
 folder. Rename the copied file to 
`page--custom-static-page.html.twig`
.

Modify the 
`page--custom-static-page.html.twig`
 file:

Open the 
`page--custom-static-page.html.twig`
 file and remove or comment out the sections you don't want to display on your custom static page. For example, to remove the header, footer, and title, you can comment out or delete the following lines:

The header section: 
`{% if page.header %} ... {% endif %}`

The footer section: 
`{% if page.footer %} ... {% endif %}`

The title: 
`{% if title %} ... {% endif %}`

Make sure to keep the line that renders the main content of your page:

```twig
{{ page.content }}
```
Clear the cache:

Clear your Drupal cache by going to the "Configuration" page, then "Performance", and click on "Clear all caches".

Now, your custom static page should be displayed without the default Drupal elements (header, footer, title, etc.) that you removed or commented out in the 
`page--custom-static-page.html.twig`
 file.

# Q

Nah, no chages. What might be an issue?

# A

I apologize for the confusion. Since you're using a custom module to create the static page, the custom page template should be placed in your active theme's folder instead of the custom module's folder. Here's how to do it:

Move the 
`page--custom-static-page.html.twig`
 file:

Cut the 
`page--custom-static-page.html.twig`
 file from your custom module's 
`templates`
 folder and paste it into your active theme's 
`templates`
 folder. If you're unsure which theme is active, you can check it by going to the "Appearance" page in your Drupal admin area.

Clear the cache:

Clear your Drupal cache by going to the "Configuration" page, then "Performance", and click on "Clear all caches".

Now, your custom static page should be displayed without the default Drupal elements (header, footer, title, etc.) that you removed or commented out in the 
`page--custom-static-page.html.twig`
 file.

If you still don't see the changes, make sure that the 
`hook_theme_suggestions_page_alter()`
 function is correctly implemented in your 
`custom_static_page.module`
 file and that the 
`page--custom-static-page.html.twig`
 file is placed in the correct 
`templates`
 folder of your active theme. Also, ensure that you've cleared the cache after making these changes.

# Q

Yuppieee!!! It works! One last question: how to add images i have? I have img elements with src specified. I can just place folder with images to root folder (for webserver to serve it as is) or is there some fancier way?

# A

I'm glad it's working for you! There are multiple ways to add images to your custom static page in Drupal. One recommended approach is to place the images in your custom module's folder and use the 
`file_url()`
 function in your Twig template to generate the correct URL for the images. Here's how to do it:

Create an 
`images`
 folder inside your custom module's folder:
 ```powershell
mkdir images
```
Place your image files in the 
`images`
 folder.

Update your 
`custom-static-page.html.twig`
 file:

In your 
`custom-static-page.html.twig`
 file, replace the 
`src`
 attribute of your 
`img`
 elements with the 
`file_url()`
 function. For example, if you have an image called 
`example-image.jpg`
, you would use the following code:

```twig
<img src="{{ file_url('public://../modules/custom_static_page/images/example-image.jpg') }}" alt="Example Image">
```
Make sure to replace 
`example-image.jpg`
 with the actual name of your image file.

Clear the cache:

Clear your Drupal cache by going to the "Configuration" page, then "Performance", and click on "Clear all caches".

Now, your images should be displayed correctly on your custom static page. This approach keeps your images organized within your custom module's folder and generates the correct URL for the images using Drupal's 
`file_url()`
 function.

# Q

No, doesnt work yet. I checked in my browser, the resulting path is: "/sites/default/files/../modules/custom_static_page/images/preview/product_preview_main.webp"

What might be the issure here?

# A

I apologize for the confusion. It seems that the 
`public://`
 stream wrapper is not suitable for this case. Instead, you can use the 
`base_path()`
 function in your Twig template to generate the correct URL for the images. Here's how to do it:

Update your 
`custom-static-page.html.twig`
 file:
In your 
`custom-static-page.html.twig`
 file, replace the 
`src`
 attribute of your 
`img`
 elements with the 
`base_path()`
 function. For example, if you have an image called 
`example-image.jpg`
, you would use the following code:

```twig
<img src="{{ base_path() ~ 'modules/custom_static_page/images/example-image.jpg' }}" alt="Example Image">
```
Make sure to replace 
`example-image.jpg`
 with the actual name of your image file.

Clear the cache:

Clear your Drupal cache by going to the "Configuration" page, then "Performance", and click on "Clear all caches".

Now, your images should be displayed correctly on your custom static page. The 
`base_path()`
 function generates the correct base URL for your Drupal installation, and the 
`~`
 operator concatenates it with the path to your image file within the custom module's folder.

 # Q

 Naah, to complicated. I just put folder with images to the root folder of my server, so img tags can access it directly

 # A

That's a valid approach as well. If you prefer to place the images folder in the root directory of your server, you can simply update the 
`src`
 attribute of your 
`img`
 elements in the 
`custom-static-page.html.twig`
 file to point to the correct path.

For example, if you have an image called 
`example-image.jpg`
 and you placed it in a folder called 
`images`
 in the root directory of your server, you would use the following code:

```twig
<img src="/images/example-image.jpg" alt="Example Image">
```
Make sure to replace 
`example-image.jpg`
 with the actual name of your image file and update the path accordingly if you're using a different folder structure.

This approach allows you to directly access the images from your server's root folder, making it easier to manage and reference them in your custom static page.