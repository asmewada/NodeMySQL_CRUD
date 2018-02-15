# NodeMySQL_CRUD
NodeJS, MySQL CRUD operation
This is a simple NodeJS mySQL application. In this applciation you will get CRUD operations means you can create your record,
search your records by id, update your records by id and delete your records by id.


get started:-
(1) clone the project.
(2) install the module by run below commad-
npm install
(3) create users table by running below command in mysql-
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
(4)run you project by-
npm start
(5)open the link
http://localhost:3000/
