-- Создание таблиц для учета заказов и клиентов с территориальным принципом и воронкой продаж

-- Таблица регионов
CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица клиентов
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    company VARCHAR(255),
    region_id INTEGER REFERENCES regions(id),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица этапов воронки продаж
CREATE TABLE sales_funnel_stages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    order_index INTEGER NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставка стандартных этапов воронки
INSERT INTO sales_funnel_stages (name, order_index, description) VALUES
('Новый лид', 1, 'Первичное обращение клиента'),
('Консультация', 2, 'Консультация и уточнение потребностей'),
('Коммерческое предложение', 3, 'Подготовка и отправка КП'),
('Согласование', 4, 'Согласование условий и цены'),
('Договор', 5, 'Подписание договора'),
('Выполнение работ', 6, 'Выполнение электромонтажных работ'),
('Завершен', 7, 'Проект успешно завершен'),
('Отказ', 8, 'Клиент отказался от услуг');

-- Таблица заказов
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL REFERENCES clients(id),
    region_id INTEGER REFERENCES regions(id),
    sales_stage_id INTEGER NOT NULL REFERENCES sales_funnel_stages(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    service_type VARCHAR(100),
    estimated_amount DECIMAL(15, 2),
    final_amount DECIMAL(15, 2),
    start_date DATE,
    end_date DATE,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица истории перемещений по воронке
CREATE TABLE funnel_history (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL REFERENCES orders(id),
    from_stage_id INTEGER REFERENCES sales_funnel_stages(id),
    to_stage_id INTEGER NOT NULL REFERENCES sales_funnel_stages(id),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
);

-- Индексы для ускорения запросов
CREATE INDEX idx_clients_region ON clients(region_id);
CREATE INDEX idx_orders_client ON orders(client_id);
CREATE INDEX idx_orders_region ON orders(region_id);
CREATE INDEX idx_orders_stage ON orders(sales_stage_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_funnel_history_order ON funnel_history(order_id);

-- Вставка примеров регионов
INSERT INTO regions (name, code) VALUES
('Москва', 'MSK'),
('Московская область', 'MO'),
('Санкт-Петербург', 'SPB'),
('Ленинградская область', 'LO'),
('Центральный регион', 'CR'),
('Уральский регион', 'UR'),
('Сибирский регион', 'SIB');