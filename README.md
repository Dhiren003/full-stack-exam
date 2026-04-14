This project is designed to run on a local development environment (localhost).
You can set it up using a local server such as XAMPP or WAMP with PHP and MySQL.

Steps to Run the Project on Localhost

1. *Clone the repository*
   Download the project from GitHub using `git clone` or by downloading the ZIP file.

2. *Move the project folder*
   Place the project folder inside your local server directory (for example, `htdocs` in XAMPP).

3. *Start the local server*
   Open your local server control panel and start **Apache** and **MySQL** services.

4. *Create a database*
   Go to `http://localhost/phpmyadmin` and create a new database for the project.

5. *Import the database file*
   Select the database, click **Import**, and upload the provided `.sql` file.

6. *Configure database settings*
   Update the database name, username, and password in the `config.php` file if required.

7. *Run the project*
   Open your browser and visit `http://localhost/project-folder-name/index.php` to view the application.
