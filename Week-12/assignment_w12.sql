-- create database warehouse
create database WareHouse;

use warehouse;

-- create tables in warehouse db

-- CITIES
create TABLE cities(
	cid integer primary key not null,
	city char(20),
	state char(20)
);

-- WAREHOUSES
create TABLE warehouses(
	wid integer not null primary key,
    city_id integer not null,
    wname char(20),
    location char(20),
    foreign key (city_id) references cities(cid)
);

-- STORES
create TABLE stores(
	sid integer not null primary key,
	wid integer not null,
    store_name char(20),
    location_city char(20),
    foreign key (wid) references warehouses(wid)
);

-- CUSTOMER
create table customer(
	cno integer not null primary key,
    cname char(50),
    addr varchar(50),
    cu_city char(20)
);

-- ORDERS
create TABLE orders(
	ono integer not null primary key,
    cno integer not null,
    odate date,
    foreign key (cno) references customer(cno)
);

-- ITEMS
create table items(
	itemno integer not null primary key,
    des text,
    weight decimal(5,2),
    cost decimal(5,2)
);

-- QUANTITY
create TABLE QUANTITY (
	id INTEGER NOT NULL AUTO_INCREMENT primary key,
 sid INTEGER NOT NULL,
 itemno INTEGER NOT NULL,
 FOREIGN KEY (sid) REFERENCES STORES(sid),
 FOREIGN KEY (itemno) REFERENCES ITEMS(itemno)
);

-- ORDERED_QUANTITY
create TABLE ORDERED_QUANTITY (
	ID INTEGER NOT NULL AUTO_INCREMENT primary key,
 ONO INTEGER NOT NULL,
 ITEMNO INTEGER NOT NULL,
 FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
 FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- insert values in CITIES table

insert into cities value(001, 'Surat', 'Gujarat');
insert into cities value(002, 'Ahmedabad', 'Gujarat');
insert into cities value(003, 'Mumbai', 'Maharashtra');
insert into cities value(004, 'Pune', 'Maharashtra');
insert into cities value(005, 'Delhi', 'Delhi');

select * from cities;

-- insert values in warehouses
insert into warehouses values(011, '1', 'warehouse-1', 'Surat');
insert into warehouses values(012, '3', 'warehouse-2', 'Mumbai');
insert into warehouses values(013, '3', 'warehouse-3', 'Mumbai');
insert into warehouses values(014, '4', 'warehouse-4', 'Pune');
insert into warehouses values(015, '5', 'warehouse-5', 'Delhi');
insert into warehouses values(016, '5', 'warehouse-5', 'Delhi');

select * from warehouses;


-- insert values in stores
insert into STORES values(101,'011','store-1','Surat');
insert into STORES values(102,'012','store-2','Mumbai');
insert into STORES values(103,'014','store-3','Pune');
insert into STORES values(104,'011','store-1','Surat');
insert into STORES values(105,'012','store-2','Mumbai');
insert into STORES values(106,'014','store-3','Pune');
insert into STORES values(107,'011','store-1','Surat');
insert into STORES values(108,'012','store-2','Mumbai');
insert into STORES values(109,'014','store-3','Pune');
insert into STORES values(110,'014','store-3','Pune');
insert into STORES values(111,'014','store-3','Pune');

select * from stores;

-- insert values in customers
INSERT INTO customer VALUES(0001,'Darshil','Parle Point Surat Pin Code is 395002','Surat');
INSERT INTO customer VALUES(0002,'Rushil','Kailsh Nagar Surat Pin Code is 395002','Surat');
INSERT INTO customer VALUES(0003,'Jenis','Parle Point Surat Pin Code is 395002','Surat');
INSERT INTO customer VALUES(0004,'Priyansh','Parle Point Surat Pin Code is 395002','Surat');
INSERT INTO customer VALUES(0005,'Kenil','Borivali MHB Colony','Mumbai');
INSERT INTO customer VALUES(0006,'Archil','Borivali MHB Colony','Mumbai');
INSERT INTO customer VALUES(0007,'Manan','Borivali MHB Colony','Mumbai');
INSERT INTO customer VALUES(0008,'Shrut','Parle Point Pune Pin Code is 395001','Pune');
INSERT INTO customer VALUES(0009,'Aarav','Parle Point Pune Pin Code is 395001','Pune');
INSERT INTO customer VALUES(0010,'Kashyap','Parle Point Pune Pin Code is 395001','Pune');

select * from customer;

-- insert values in ORDERS
INSERT INTO ORDERS VALUES(10001,3,'2023-12-31');
INSERT INTO ORDERS VALUES(10002,5,'2020-11-1');
INSERT INTO ORDERS VALUES(10003,2,'2020-9-5');
INSERT INTO ORDERS VALUES(10004,1,'2023-8-19');
INSERT INTO ORDERS VALUES(10005,1,'2022-6-16');
INSERT INTO ORDERS VALUES(10006,3,'2022-9-3');
INSERT INTO ORDERS VALUES(10007,2,'2023-1-3');
INSERT INTO ORDERS VALUES(10008,7,'2022-6-13');
INSERT INTO ORDERS VALUES(10009,10,'2020-2-7');
INSERT INTO ORDERS VALUES(10010,10,'2023-12-31');
INSERT INTO ORDERS VALUES(10011,4,'2020-11-1');
INSERT INTO ORDERS VALUES(10012,3,'2020-9-5');
INSERT INTO ORDERS VALUES(10013,5,'2022-10-31');
INSERT INTO ORDERS VALUES(10014,6,'2020-7-1');
INSERT INTO ORDERS VALUES(10015,7,'2022-3-5');

select * from ORDERS;

-- insert values in Items
INSERT INTO ITEMS VALUES(11001,'FAN',10.02,200.00);
INSERT INTO ITEMS VALUES(12002,'TOY',15.89,50.45);
INSERT INTO ITEMS VALUES(13003,'MOBILE',108.90,400.0);
INSERT INTO ITEMS VALUES(14004,'FAN',10.02,200.00);
INSERT INTO ITEMS VALUES(15005,'TOY',15.89,50.45);
INSERT INTO ITEMS VALUES(16006,'MOBILE',108.90,400.00);
INSERT INTO ITEMS VALUES(17007,'TOY',15.89,50.45);
INSERT INTO ITEMS VALUES(18008,'FAN',10.02,200.00);
INSERT INTO ITEMS VALUES(19009,'TOY',15.89,50.45);
INSERT INTO ITEMS VALUES(10010,'MOBILE',108.90,400.00);
INSERT INTO ITEMS VALUES(11011,'FAN',10.02,200.00);
INSERT INTO ITEMS VALUES(12012,'TOY',15.89,50.45);
INSERT INTO ITEMS VALUES(13013,'CHARGER',50.37,300.9);
INSERT INTO ITEMS VALUES(14014,'FAN',10.02,200.00);
INSERT INTO ITEMS VALUES(15015,'CHARGER',50.37,300.9);

select * from Items;

-- insert value in QUANTITY

INSERT INTO QUANTITY VALUES(1111,01001,11001);
INSERT INTO QUANTITY VALUES(1012,01001,14004);
INSERT INTO QUANTITY VALUES(1013,01001,18008);
INSERT INTO QUANTITY VALUES(1014,01001,11011);
INSERT INTO QUANTITY VALUES(1015,01002,12002);
INSERT INTO QUANTITY VALUES(1016,01002,15005);
INSERT INTO QUANTITY VALUES(1017,01002,17007);
INSERT INTO QUANTITY VALUES(1018,01002,19009);
INSERT INTO QUANTITY VALUES(1019,01002,12012);
INSERT INTO QUANTITY VALUES(1020,01003,13003);
INSERT INTO QUANTITY VALUES(1021,01003,16006);
INSERT INTO QUANTITY VALUES(1022,01003,10010);
INSERT INTO QUANTITY VALUES(1023,01003,13013);
INSERT INTO QUANTITY VALUES(1024,01003,15015);

select * from QUANTITY;

-- insert values in ORDERED_QUANTITY

INSERT INTO ORDERED_QUANTITY VALUES(1111,10001,10010);
INSERT INTO ORDERED_QUANTITY VALUES(1112,10002,10010);
INSERT INTO ORDERED_QUANTITY VALUES(1113,10003,10010);
INSERT INTO ORDERED_QUANTITY VALUES(1114,10004,11001);
INSERT INTO ORDERED_QUANTITY VALUES(1115,10005,11001);
INSERT INTO ORDERED_QUANTITY VALUES(1116,10006,11011);
INSERT INTO ORDERED_QUANTITY VALUES(1117,10007,12002);
INSERT INTO ORDERED_QUANTITY VALUES(1118,10008,12012);
INSERT INTO ORDERED_QUANTITY VALUES(1119,10009,13003);
INSERT INTO ORDERED_QUANTITY VALUES(1120,10010,13013);
INSERT INTO ORDERED_QUANTITY VALUES(1121,10011,14004);
INSERT INTO ORDERED_QUANTITY VALUES(1122,10012,15005);
INSERT INTO ORDERED_QUANTITY VALUES(1123,10013,16006);
INSERT INTO ORDERED_QUANTITY VALUES(1124,10014,17007);
INSERT INTO ORDERED_QUANTITY VALUES(1125,10015,19009);

select * from ORDERED_QUANTITY;

