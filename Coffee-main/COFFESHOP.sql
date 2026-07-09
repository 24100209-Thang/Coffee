-- =============================================
-- COFFEESHOP DATABASE - Schema theo ERD diagram
-- Bảng: EMPLOYEE, CUSTOMER, ITEM, CUSTOMER_ORDER
-- =============================================

DROP DATABASE IF EXISTS COFFEESHOP;
CREATE DATABASE COFFEESHOP CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE COFFEESHOP;

-- ---------------------------------------------
-- EMPLOYEE (EMP_ID, EMP_NAME, DOB, WORK_HOURS)
-- ---------------------------------------------
CREATE TABLE EMPLOYEE (
    EMP_ID      VARCHAR(10)  NOT NULL,
    EMP_NAME    VARCHAR(50)  NOT NULL,
    DOB         DATE         NOT NULL,
    WORK_HOURS  DOUBLE       DEFAULT 0,
    PRIMARY KEY (EMP_ID)
);

-- ---------------------------------------------
-- CUSTOMER (CUSTOMER_ID, CUSTOMER_NAME, PHONE, EMP_ID)
-- CUSTOMER.EMP_ID -> EMPLOYEE.EMP_ID
-- ---------------------------------------------
CREATE TABLE CUSTOMER (
    CUSTOMER_ID   VARCHAR(10) NOT NULL,
    CUSTOMER_NAME VARCHAR(50),
    PHONE         VARCHAR(20),
    EMP_ID        VARCHAR(10),
    PRIMARY KEY (CUSTOMER_ID),
    FOREIGN KEY (EMP_ID) REFERENCES EMPLOYEE(EMP_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- ---------------------------------------------
-- ITEM (ITEM_ID, ITEM_NAME, PRICE, ITEM_TYPE, EMP_ID)
-- ITEM.EMP_ID -> EMPLOYEE.EMP_ID
-- ---------------------------------------------
CREATE TABLE ITEM (
    ITEM_ID    VARCHAR(10)  NOT NULL,
    ITEM_NAME  VARCHAR(100),
    PRICE      INT          DEFAULT 0,
    ITEM_TYPE  VARCHAR(20),
    EMP_ID     VARCHAR(10),
    PRIMARY KEY (ITEM_ID),
    FOREIGN KEY (EMP_ID) REFERENCES EMPLOYEE(EMP_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);

-- ---------------------------------------------
-- CUSTOMER_ORDER (ORDER_ID, CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE)
-- ORDER_ID: AUTO_INCREMENT (PK)
-- CUSTOMER_ORDER.CUSTOMER_ID -> CUSTOMER.CUSTOMER_ID
-- CUSTOMER_ORDER.ITEM_ID     -> ITEM.ITEM_ID
-- ---------------------------------------------
CREATE TABLE CUSTOMER_ORDER (
    ORDER_ID    INT          NOT NULL AUTO_INCREMENT,
    CUSTOMER_ID VARCHAR(10),
    ITEM_ID     VARCHAR(10),
    QUANTITY    INT          DEFAULT 1,
    ORDER_DATE  DATE,
    PRIMARY KEY (ORDER_ID),
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(CUSTOMER_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (ITEM_ID) REFERENCES ITEM(ITEM_ID)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);
CREATE TABLE User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(100) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    Role ENUM('ADMIN','EMPLOYEE','CUSTOMER') DEFAULT 'CUSTOMER',
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- =============================================
-- DỮ LIỆU MẪU
-- =============================================

-- Nhân viên
INSERT INTO EMPLOYEE VALUES
('E001', 'Nguyen Van A',  '2000-01-01', 8),
('E002', 'Tran Thi B',   '1999-05-10', 6),
('E003', 'Le Van C',     '2001-08-20', 7);

-- Khách hàng
INSERT INTO CUSTOMER VALUES
('C001', 'Nguyen Minh',   '0911111111', 'E001'),
('C002', 'Tran Long',     '0922222222', 'E001'),
('C003', 'Le Hoa',        '0933333333', 'E002');

-- Sản phẩm (ITEM)
INSERT INTO ITEM VALUES
('I001', 'Ca phe den',   30000, 'Coffee', 'E001'),
('I002', 'Ca phe sua',   35000, 'Coffee', 'E001'),
('I003', 'Tra dao',      40000, 'Tea',    'E002'),
('I004', 'Bac xiu',      45000, 'Coffee', 'E003'),
('I005', 'Nuoc cam',     25000, 'Juice',  'E002');

-- Đơn hàng
INSERT INTO CUSTOMER_ORDER (CUSTOMER_ID, ITEM_ID, QUANTITY, ORDER_DATE) VALUES
('C001', 'I001', 2, '2026-06-01'),
('C001', 'I003', 1, '2026-06-01'),
('C002', 'I002', 3, '2026-06-02'),
('C003', 'I004', 1, '2026-06-03');

COMMIT;