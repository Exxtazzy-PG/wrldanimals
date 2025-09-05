import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Select, Input } from 'antd';
import { Search, MapPin, Heart } from 'lucide-react';
import './CatalogSection.css';

const { Meta } = Card;
const { Option } = Select;

const CatalogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const animalsData = [
    {
      id: 1,
      name: 'Африканский лев',
      category: 'Хищники',
      habitat: 'Саванна',
      image: 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Король саванны, символ силы и мужества. Живет в прайдах и охотится группами.',
      status: 'Уязвимый'
    },
    {
      id: 2,
      name: 'Африканский слон',
      category: 'Травоядные',
      habitat: 'Саванна',
      image: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Самое крупное наземное млекопитающее. Обладает удивительной памятью и интеллектом.',
      status: 'Находится под угрозой'
    },
    {
      id: 3,
      name: 'Белый медведь',
      category: 'Хищники',
      habitat: 'Арктика',
      image: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Арктический хищник, прекрасно адаптированный к жизни во льдах.',
      status: 'Уязвимый'
    },
    {
      id: 4,
      name: 'Горная горилла',
      category: 'Приматы',
      habitat: 'Горные леса',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Редкий вид приматов, живущий в горных лесах Центральной Африки.',
      status: 'Критически угрожаемый'
    },
    {
      id: 5,
      name: 'Амурский тигр',
      category: 'Хищники',
      habitat: 'Тайга',
      image: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Самый крупный представитель семейства кошачьих. Обитает в дальневосточной тайге.',
      status: 'Находится под угрозой'
    },
    {
      id: 6,
      name: 'Гигантская панда',
      category: 'Травоядные',
      habitat: 'Бамбуковые леса',
      image: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Символ охраны природы. Питается почти исключительно бамбуком.',
      status: 'Уязвимый'
    }
  ];

  const categories = ['all', 'Хищники', 'Травоядные', 'Приматы'];

  const filteredAnimals = animalsData.filter(animal => {
    const matchesCategory = selectedCategory === 'all' || animal.category === selectedCategory;
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Критически угрожаемый': return '#ff4d4f';
      case 'Находится под угрозой': return '#fa8c16';
      case 'Уязвимый': return '#fadb14';
      default: return '#52c41a';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="catalog" className="section catalog-section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Каталог животных</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Познакомьтесь с удивительными обитателями нашей планеты
          </p>
        </motion.div>

        <motion.div
          className="catalog-controls"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="search-section">
            <Input
              placeholder="Поиск животных..."
              prefix={<Search size={16} />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              size="large"
            />
          </div>
          
          <div className="filter-section">
            <Select
              value={selectedCategory}
              onChange={setSelectedCategory}
              className="category-select"
              size="large"
              style={{ width: 200 }}
            >
              <Option value="all">Все категории</Option>
              {categories.slice(1).map(category => (
                <Option key={category} value={category}>{category}</Option>
              ))}
            </Select>
          </div>
        </motion.div>

        <motion.div
          className="animals-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredAnimals.map((animal) => (
            <motion.div
              key={animal.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                hoverable
                className="animal-card"
                cover={
                  <div className="animal-image">
                    <img src={animal.image} alt={animal.name} />
                    <div className="animal-category">{animal.category}</div>
                  </div>
                }
                actions={[
                  <div key="habitat" className="card-action">
                    <MapPin size={16} />
                    <span>{animal.habitat}</span>
                  </div>,
                  <div key="like" className="card-action">
                    <Heart size={16} />
                    <span>Нравится</span>
                  </div>
                ]}
              >
                <Meta
                  title={
                    <div className="animal-title">
                      <span>{animal.name}</span>
                      <div 
                        className="status-indicator"
                        style={{ backgroundColor: getStatusColor(animal.status) }}
                        title={animal.status}
                      ></div>
                    </div>
                  }
                  description={animal.description}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredAnimals.length === 0 && (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Животные не найдены. Попробуйте изменить критерии поиска.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;