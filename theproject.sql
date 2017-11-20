/*
Navicat MySQL Data Transfer

Source Server         : h5_1706
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : theproject

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-20 12:00:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for best
-- ----------------------------
DROP TABLE IF EXISTS `best`;
CREATE TABLE `best` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `English` varchar(255) DEFAULT NULL,
  `priced` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of best
-- ----------------------------
INSERT INTO `best` VALUES ('1', 'img/Best1.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:05');
INSERT INTO `best` VALUES ('2', 'img/Best2.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:09');
INSERT INTO `best` VALUES ('3', 'img/Best3.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:14');
INSERT INTO `best` VALUES ('4', 'img/Best4.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:18');
INSERT INTO `best` VALUES ('5', 'img/Best5.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:25');
INSERT INTO `best` VALUES ('6', 'img/Best6.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:29');
INSERT INTO `best` VALUES ('7', 'img/Best7.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:34');
INSERT INTO `best` VALUES ('8', 'img/Best8.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:42');
INSERT INTO `best` VALUES ('9', 'img/Best9.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:47');
INSERT INTO `best` VALUES ('10', 'img/Best10.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:51');
INSERT INTO `best` VALUES ('11', 'img/Best11.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:04:55');
INSERT INTO `best` VALUES ('12', 'img/Best12.png', 'WEEKLY!', '[KOCOSTAR] 可可星 头发护理膜（长发）', '[KOCOSTAR] LONG HAIR PACK', '￥169', '----￥122', '2017-11-17 20:05:03');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `style` varchar(255) DEFAULT NULL,
  `Enlish` varchar(255) DEFAULT NULL,
  `priced` varchar(10) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', 'img/third_div1.jpg', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('2', 'img/third_div2.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('3', 'img/third_div3.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('4', 'img/third_div4.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('5', 'img/third_div5.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('6', 'img/third_div6.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('7', 'img/third_div7.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('8', 'img/third_div8.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('9', 'img/third_div9.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('10', 'img/third_div10.gif', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('11', 'img/third_div11.jpg', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');
INSERT INTO `goodslist` VALUES ('12', 'img/third_div12.jpg', 'New!', 'åŽä¸½èŠ±æœµåˆºç»£~å¯çˆ±UPâ™¥', 'Floral Embroidery Sweatshirt', 'ï¿¥214', '----ï¿¥200', '2017-11-16 15:52:24');

-- ----------------------------
-- Table structure for myuser
-- ----------------------------
DROP TABLE IF EXISTS `myuser`;
CREATE TABLE `myuser` (
  `user` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `chicun` varchar(255) DEFAULT NULL,
  `thecount` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `priced` varchar(255) DEFAULT NULL,
  `English` varchar(255) DEFAULT NULL,
  `id` varchar(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of myuser
-- ----------------------------
INSERT INTO `myuser` VALUES ('xiaoqiang@qq.com', '乳白色', 'ONE', '27', 'img/n_third_div1.gif', '2017-11-18 11:37:20', '----￥200', 'Wool Slim Slacks', '1');
INSERT INTO `myuser` VALUES ('xiaoqiang123@qq.com', '乳白色', 'ONE', '3', 'img/third_div1.jpg', '2017-11-18 12:01:03', '----￥200', 'Floral Embroidery Sweatshirt', '1');

-- ----------------------------
-- Table structure for n_fourth_div
-- ----------------------------
DROP TABLE IF EXISTS `n_fourth_div`;
CREATE TABLE `n_fourth_div` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `English` varchar(255) DEFAULT NULL,
  `priced` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of n_fourth_div
-- ----------------------------
INSERT INTO `n_fourth_div` VALUES ('1', 'img/n_fourth_div1.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('2', 'img/n_fourth_div2.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('3', 'img/n_fourth_div3.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('4', 'img/n_fourth_div4.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('5', 'img/n_fourth_div5.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('6', 'img/n_fourth_div6.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('7', 'img/n_fourth_div7.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('8', 'img/n_fourth_div8.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('9', 'img/n_fourth_div9.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('10', 'img/n_fourth_div10.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('11', 'img/n_fourth_div11.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('12', 'img/n_fourth_div12.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('13', 'img/n_fourth_div13.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('14', 'img/n_fourth_div14.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('15', 'img/n_fourth_div15.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('16', 'img/n_fourth_div1.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('17', 'img/n_fourth_div2.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('18', 'img/n_fourth_div3.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('19', 'img/n_fourth_div4.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('20', 'img/n_fourth_div5.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('21', 'img/n_fourth_div6.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('22', 'img/n_fourth_div7.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('23', 'img/n_fourth_div8.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('24', 'img/n_fourth_div9.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('25', 'img/n_fourth_div10.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('26', 'img/n_fourth_div11.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('27', 'img/n_fourth_div12.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('28', 'img/n_fourth_div13.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('29', 'img/n_fourth_div14.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('30', 'img/n_fourth_div15.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('31', 'img/n_fourth_div1.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('32', 'img/n_fourth_div2.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('33', 'img/n_fourth_div3.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('34', 'img/n_fourth_div4.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('35', 'img/n_fourth_div5.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('36', 'img/n_fourth_div6.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('37', 'img/n_fourth_div7.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('38', 'img/n_fourth_div8.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('39', 'img/n_fourth_div9.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('40', 'img/n_fourth_div10.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('41', 'img/n_fourth_div11.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('42', 'img/n_fourth_div12.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('43', 'img/n_fourth_div13.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('44', 'img/n_fourth_div14.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('45', 'img/n_fourth_div15.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('46', 'img/n_fourth_div1.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('47', 'img/n_fourth_div2.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('48', 'img/n_fourth_div3.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('49', 'img/n_fourth_div4.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('50', 'img/n_fourth_div5.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('51', 'img/n_fourth_div6.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('52', 'img/n_fourth_div7.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('53', 'img/n_fourth_div8.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('54', 'img/n_fourth_div9.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('55', 'img/n_fourth_div10.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('56', 'img/n_fourth_div11.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('57', 'img/n_fourth_div12.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('58', 'img/n_fourth_div13.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('59', 'img/n_fourth_div14.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');
INSERT INTO `n_fourth_div` VALUES ('60', 'img/n_fourth_div15.gif', 'WEEKLY!', '多种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:50');

-- ----------------------------
-- Table structure for n_third_div
-- ----------------------------
DROP TABLE IF EXISTS `n_third_div`;
CREATE TABLE `n_third_div` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `English` varchar(255) DEFAULT NULL,
  `priced` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of n_third_div
-- ----------------------------
INSERT INTO `n_third_div` VALUES ('1', 'img/n_third_div1.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('2', 'img/n_third_div2.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('3', 'img/n_third_div3.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('4', 'img/n_third_div4.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('5', 'img/n_third_div5.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('6', 'img/n_third_div6.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('7', 'img/n_third_div7.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('8', 'img/n_third_div8.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('9', 'img/n_third_div9.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('10', 'img/n_third_div10.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('11', 'img/n_third_div11.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');
INSERT INTO `n_third_div` VALUES ('12', 'img/n_third_div12.gif', 'S,M,L', '2种样式设计', 'Wool Slim Slacks', '￥214', '----￥200', '2017-11-16 16:17:28');

-- ----------------------------
-- Table structure for thegoodslist
-- ----------------------------
DROP TABLE IF EXISTS `thegoodslist`;
CREATE TABLE `thegoodslist` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `English` varchar(255) DEFAULT NULL,
  `priced` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of thegoodslist
-- ----------------------------
INSERT INTO `thegoodslist` VALUES ('1', 'img/fourth_div1.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('2', 'img/fourth_div2.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('3', 'img/fourth_div3.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('4', 'img/fourth_div4.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('5', 'img/fourth_div5.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('6', 'img/fourth_div6.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('7', 'img/fourth_div7.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('8', 'img/fourth_div8.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('9', 'img/fourth_div9.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('10', 'img/fourth_div10.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('11', 'img/fourth_div11.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('12', 'img/fourth_div12.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('13', 'img/fourth_div13.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('14', 'img/fourth_div14.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('15', 'img/fourth_div15.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('16', 'img/fourth_div1.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('17', 'img/fourth_div2.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('18', 'img/fourth_div3.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('19', 'img/fourth_div4.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('20', 'img/fourth_div5.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('21', 'img/fourth_div6.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('22', 'img/fourth_div7.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('23', 'img/fourth_div8.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('24', 'img/fourth_div9.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('25', 'img/fourth_div10.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('26', 'img/fourth_div11.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('27', 'img/fourth_div12.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('28', 'img/fourth_div13.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('29', 'img/fourth_div14.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('30', 'img/fourth_div15.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('31', 'img/fourth_div1.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('32', 'img/fourth_div2.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('33', 'img/fourth_div3.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('34', 'img/fourth_div4.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('35', 'img/fourth_div5.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('36', 'img/fourth_div6.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('37', 'img/fourth_div7.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('38', 'img/fourth_div8.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('39', 'img/fourth_div9.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('40', 'img/fourth_div10.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('41', 'img/fourth_div11.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('42', 'img/fourth_div12.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('43', 'img/fourth_div13.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('44', 'img/fourth_div14.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('45', 'img/fourth_div15.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('46', 'img/fourth_div1.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('47', 'img/fourth_div2.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('48', 'img/fourth_div3.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('49', 'img/fourth_div4.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('50', 'img/fourth_div5.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('51', 'img/fourth_div6.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('52', 'img/fourth_div7.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('53', 'img/fourth_div8.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('54', 'img/fourth_div9.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('55', 'img/fourth_div10.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('56', 'img/fourth_div11.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('57', 'img/fourth_div12.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('58', 'img/fourth_div13.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('59', 'img/fourth_div14.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');
INSERT INTO `thegoodslist` VALUES ('60', 'img/fourth_div15.jpg', 'New!', 'S, M ★ 腰围下褶皱，显腰细的阔腿西裤', 'Pintuck Wide Leg Pants', '￥214', '----￥200', '2017-11-16 15:58:27');

-- ----------------------------
-- Table structure for third_div
-- ----------------------------
DROP TABLE IF EXISTS `third_div`;
CREATE TABLE `third_div` (
  `id` int(11) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `style` varchar(255) DEFAULT NULL,
  `English` varchar(255) DEFAULT NULL,
  `priced` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of third_div
-- ----------------------------
INSERT INTO `third_div` VALUES ('1', 'img/third_div1.jpg', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('2', 'img/third_div2.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('3', 'img/third_div3.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('4', 'img/third_div4.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('5', 'img/third_div5.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('6', 'img/third_div6.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('7', 'img/third_div7.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('8', 'img/third_div8.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('9', 'img/third_div9.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('10', 'img/third_div10.gif', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('11', 'img/third_div11.jpg', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');
INSERT INTO `third_div` VALUES ('12', 'img/third_div12.jpg', 'New!', '华丽花朵刺绣~可爱UP♥', 'Floral Embroidery Sweatshirt', '￥214', '----￥200', '2017-11-16 16:01:34');

-- ----------------------------
-- Table structure for usernews
-- ----------------------------
DROP TABLE IF EXISTS `usernews`;
CREATE TABLE `usernews` (
  `user` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `add_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usernews
-- ----------------------------
INSERT INTO `usernews` VALUES ('xxx', 'xxxxx', null, null, null, '2017-11-17 20:51:48');
INSERT INTO `usernews` VALUES ('xxxxxxx', 'xxxxx', null, null, null, '2017-11-17 20:53:00');
INSERT INTO `usernews` VALUES ('xiaoqiang@qq.com', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '2017-11-17 21:11:50');
INSERT INTO `usernews` VALUES ('qq@qq.com', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '2017-11-17 21:14:05');
INSERT INTO `usernews` VALUES ('xxx@dffd.ddd', 'd41d8cd98f00b204e9800998ecf8427e', '', '', '', '2017-11-17 21:16:50');
INSERT INTO `usernews` VALUES ('dxxx', 'f561aaf6ef0bf14d4208bb46a4ccb3ad', 'ddd', '', '', '2017-11-18 09:24:51');
INSERT INTO `usernews` VALUES ('xxxdfg', '827ccb0eea8a706c4c34a16891f84e7b', 'hhhh', '', '', '2017-11-18 09:45:17');
INSERT INTO `usernews` VALUES ('xiaoqiang@qq.comddd', 'e10adc3949ba59abbe56e057f20f883e', 'xiaoqiang', '男', '13125697894', '2017-11-18 09:52:19');
INSERT INTO `usernews` VALUES ('xiaoqiang123@qq.com', 'e10adc3949ba59abbe56e057f20f883e', 'xiaoqiang', '男', '15365897456', '2017-11-18 10:31:45');
SET FOREIGN_KEY_CHECKS=1;
