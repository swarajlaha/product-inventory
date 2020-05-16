# product-inventory
A product inventory application made using React JS and JSON server, with features like - user authentication, managing products, with a responsive UI and good UX.

**PRODUCTS INVENTORY**

**Screenshots:**

![AboutPage](https://user-images.githubusercontent.com/26769575/82124949-3829cd00-97c0-11ea-8aef-7f9259b14b2d.JPG)

![ViewProductsPage](https://user-images.githubusercontent.com/26769575/82124962-54c60500-97c0-11ea-880b-63a67da7d736.JPG)

**Features:**

1. Responsive User Interface
2. Appropriate input fields
3. Form validations and user friendly features
4. Search filter to display only a subset of items wherever required
5. Customization of fields displayed
6. User registration
7. User sign-in and authentication
8. Product inventory management
9. Add, update or delete operations only by signed-in user
10. View products by all the users
11. View chart of top viewed products
12. Prompt when user tries to add, edit or delete products, without signing in
13. Pre-populated data of the product in product update page
14. Unique product and user id generation
15. Notify, if the user accidentally moves out of the &quot;Add Product form page&quot; after inputting some data in the form.
16. Deletion of one or more products at a time

**How to Run the App:**

1. Download or clone the app.
2. To install the required packages and dependencies, run ```bash npm install ``` in a terminal or the CMD, in the project directory.
3. To start the server, click open the batch file, in the file path: _products-inventory/db/_ namely- _server.bat_.
4. To run the app, open the batch file, in the file path: _products-inventory/db/_ namely- _app.bat or_ type and enter _npm start_ in the CMD/ Windows Powershell/ Terminal in the application directory.
5. Your default browser should open the app and you&#39;ll be viewing the home page/ landing page, i.e. the _About Page_.
6. In the _About_ Page, you can read about the app, view the products list, view the top products, in the _Products drop down_ and you can do all these without even the need to sign in.
7. In the _View Products List_ page, you&#39;ll be shown a list of all the available products in the inventory and you can also search for a specific product you&#39;re searching for in the search bar, by typing a few characters of the search item, but you can&#39;t add, view details or delete products, without signing in.
8. You can also _Customize Fields_, by clicking on the right button to the card and selecting from the drop down, which all fields you want to view.
9. In the _Top Viewed Products_ page, you should be seeing a bar chart, of the products, which are viewed how many times.
10. If you&#39;re already a user, I.e. you&#39;ve registered successfully earlier, you&#39;ll need to _sign in_, which can be found on the navigation bar, right side or in the _Welcome_ box in the About page. To make sure you&#39;re not yet signed in, the nav bar should show the option to _Sign In,_ on it&#39;s right side.
11. Once signed in successfully, the _Sign In_ button changes to _Sign Out_, with a message- _Hello, YourUsername_ adjacent to it.
12. You can click on your _username_ on the navbar, to view the details of yourself, that you would have provided during registration.
13. If you are not already a user, find the button in the About Page, inside the _Welcome_ box and register yourself, by providing the basic details.
14. During registration, you&#39;ll have to provide you _First_ and _Last names_, a valid _Email_ (which would be your username), Password (must be atleast 6 characters long), _Mobile number_ (must be exactly 10 digits) and your _Location_.
15. On clicking the blue _Register_ button, an alert would pop-up, saying that you&#39;re successfully registered. In case you wrongly typed something and want to reset the whole form, click the _Reset_ button.
16. After, registration, you can now proceed to sign in, by providing your correct username (email id) and the password.
17. Once signed in successfully, you&#39;ll now be redirected to the _View Products_ page, but now you shall be eligible to- _View Details_ of a product, by clicking on the Product Name, delete one or more products, by selecting the check boxes and pressing the _Delete_ button at the bottom.
18. On clicking on a specific product, you&#39;ll be redirected to that _Product Details_ page and here you can _view additional data_ about that product, _Add New Product_ by clicking on the top green button, _Edit, Delete_ product, by clicking on the respective links.
19. On clicking on the _Add New_ Button, you&#39;ll be redirected to the _Add new product_ page, where you can add a new product by providing various details. While providing the details, in case you press on some other link or button, you&#39;ll be given a prompt, which you need to confirm, if you really wish to switch to some other page or press _Cancel_ to stay in the _Add Product Page_.
20. In the _View Product page_, you can Edit the product, by clicking on the _Edit link_, which would redirect you to the _Edit Product Page_. Here you should find the data already populated in the fields for your convenience and you only need to make the necessary changes and then click on the _Update Product button_.
21. In the _View Product page_, you can Delete the product, by clicking on the _Delete link_ an alert pop up would show up, which you need to confirm to delete that product.
22. Some sample products and users have been added for your reference and time saving. You would find them in the server resources and may use them or create new ones as well.

**Some Issues Which You Might Encounter, While Using This App:**
All measures and testing have been taken proper care of, but still you might face some issues while using the app. In case you face any, most of them would be, browser or internet related issues or issues which can&#39;t be avoided, as they&#39;re out of this project&#39;s scope.
Below are a few issues, which you might face, while using the app:

1. _Not loading of images immediately -_ The images used here, are directly fetched from the internet, so in case they don&#39;t render immediately, they would definitely in a few milliseconds. Just make sure you&#39;re connected to a stable internet.
2. _Redirecting to a blank page -_ Very rarely you might face this issue. It&#39;s nothing related to the code, but browser or if you&#39;re using any mouse back button(which are mostly available in gaming mouse) only. Kindly type [_http://localhost:3000/_](http://localhost:3000/)and go back to home or type any other page name in the browser search bar.
3. _Pop-up issue -_ Pop-ups have been enabled in some pages for better user experience. But at times, very rarely though, you may face more than one pop-up at the same time, in the same page. This is simply a browser issue, when the browser is not able to handle multiple pop-ups at times. Kindly keep pressing _OK_ or whichever button is available in that pop-up, till it goes away. At most you may encounter 2 pop-ups at times.

**Pages/Components:**

1. _AboutPage.js_ - Renders the about page, where user can navigate to sign in, register, view products or view top view products chart pages.
2. _AddNewProductsPage.js_ - A signed in user can add a new product.
3. _EditProductPage_ - A signed in user can edit an existing new product.
4. _ProductsDetailsPage.js_ - A user (who has signed in) can view the details of the product, he/she wishes to view.
5. _RegisterPage.js_ - A visitor (user who has not yet signed in) can register himself/herself, by providing various required information.
6. _SignInPage.js_ - A visitor can sign in himself/herself, by providing various required information.
7. _TopViewedProductsPage.js_ - A visitor or user can view the product views, in the form of a bar bar chart.
8. _UserDetailsPage.js_ - A user, who&#39;s signed in can view his/her details, provided by him/her.
9. _ViewProductsPage.js_ - A visitor/user can view the list of all products available in the inventory.

**Architecture of the Project:**
FLUX :
The FLUX design pattern or architecture has implemented in this project. In the project directory, you would find folders like, _actions, dispatcher, stores_, _views_ or _components_, to be specific, apart from other folders. These folders contain files, where the FLUX design pattern is implemented.
1. _Actions_ : These are helper methods that facilitate passing data to the Dispatcher.
2. _Dispatcher_ : Receives actions and broadcasts payloads to registered callbacks.
3. _Stores_ : They are the containers for the application state and logic, that have callbacks registered to the dispatcher.
4. _Views_ / _Components_ : React Components that grab the state from Stores and pass it down via props to child components.

For the API part, _JSON Server_ has been used to serve data, which provides a REST API.
Testing has been done for some of the components and various test cases have been written using React _Test Driven Development (TDD)_, using the _Jest_ framework and _Enzyme_ testing utility.
Random images have been used, that are fetched from Lorem Picsum (https://picsum.photos/).

So, experience using _ **Product Inventory** _ and give feed-backs, if any by making Pull Requests. If you like the app, don't forget to STAR!
