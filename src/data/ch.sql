/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ch

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-01-02 09:11:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `bs` varchar(255) DEFAULT NULL,
  `qua` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('2', ' 苯丁酸氮芥片 ', '￥306.00', '2.jpg', '规格：210ml', '1');
INSERT INTO `cart` VALUES ('3', ' 复方环磷酰胺片 ', '￥55.00', '3.jpg', '规格：320ml', '1');
INSERT INTO `cart` VALUES ('4', ' 脾氨肽口服冻干粉 ', '￥52.00', '4.jpg', '规格：150ml', '1');
INSERT INTO `cart` VALUES ('5', '肠内营养粉剂(TP) ', '￥128.00', '5.jpg', '规格：250ml', '1');
INSERT INTO `cart` VALUES ('9', '肠内营养乳剂(TPF-T)', '￥55.00', '1.jpg', '规格：210ml', '');

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `urlimg` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('1', '泰勒宁 ', 'images/1.jpg', '../images/1.jpg', '338');
INSERT INTO `goodslist` VALUES ('2', '留可然 ', 'images/2.jpg', '../images/2.jpg', '238');
INSERT INTO `goodslist` VALUES ('3', '复方环磷酰胺片 ', 'images/3.jpg', '../images/3.jpg', '157');
INSERT INTO `goodslist` VALUES ('4', '复可托 ', 'images/4.jpg', '../images/4.jpg', '147');
INSERT INTO `goodslist` VALUES ('5', '安素 ', 'images/5.jpg', '../images/5.jpg', '145');
INSERT INTO `goodslist` VALUES ('6', '艾力可 ', 'images/6.jpg', '../images/6.jpg', '245');
INSERT INTO `goodslist` VALUES ('7', '化癥回生口服液 ', 'images/7.jpg', '../images/7.jpg', '366');
INSERT INTO `goodslist` VALUES ('8', '依木兰 ', 'images/8.jpg', '../images/8.jpg', '306');
INSERT INTO `goodslist` VALUES ('9', '瑞能 ', 'images/9.jpg', '../images/9.jpg', '55');
INSERT INTO `goodslist` VALUES ('10', '参一胶囊 ', 'images/10.jpg', '../images/10.jpg', '245');
INSERT INTO `goodslist` VALUES ('11', '升血小板胶囊 ', 'images/11.jpg', '../images/11.jpg', '52');
INSERT INTO `goodslist` VALUES ('12', '百士欣 ', 'images/12.jpg', '../images/12.jpg', '128');
INSERT INTO `goodslist` VALUES ('13', '高三尖杉酯碱注射液 ', 'images/13.jpg', '../images/13.jpg', '215');
INSERT INTO `goodslist` VALUES ('14', '艾思瑞 ', 'images/14.jpg', '../images/14.jpg', '321');
INSERT INTO `goodslist` VALUES ('15', '复方万年青胶囊 ', 'images/15.jpg', '../images/15.jpg', '398');
INSERT INTO `goodslist` VALUES ('16', '金克 ', 'images/16.jpg', '../images/16.jpg', '245');
INSERT INTO `goodslist` VALUES ('17', '羟基脲片 ', 'images/17.jpg', '../images/17.jpg', '563');
INSERT INTO `goodslist` VALUES ('18', '抗癌平丸 ', 'images/18.jpg', '../images/18.jpg', '142');
INSERT INTO `goodslist` VALUES ('19', '司莫司汀胶囊 ', 'images/19.jpg', '../images/19.jpg', '385');
INSERT INTO `goodslist` VALUES ('20', '巯嘌呤片 ', 'images/20.jpg', '../images/20.jpg', '198');
INSERT INTO `goodslist` VALUES ('21', '肝复乐片 ', 'images/21.jpg', '../images/21.jpg', '148');
INSERT INTO `goodslist` VALUES ('22', '清肺散结丸 ', 'images/22.jpg', '../images/22.jpg', '699');
INSERT INTO `goodslist` VALUES ('23', '西黄丸 ', 'images/23.jpg', '../images/23.jpg', '35');
INSERT INTO `goodslist` VALUES ('24', '巯嘌呤片 ', 'images/24.jpg', '../images/24.jpg', '148');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('qwe', '123');
INSERT INTO `user` VALUES ('wer', '');
INSERT INTO `user` VALUES ('jkl', '');
INSERT INTO `user` VALUES ('sef', '123');
INSERT INTO `user` VALUES ('', '');

-- ----------------------------
-- Table structure for xiangqinglist
-- ----------------------------
DROP TABLE IF EXISTS `xiangqinglist`;
CREATE TABLE `xiangqinglist` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `arr` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `bs` varchar(255) DEFAULT NULL,
  `qua` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xiangqinglist
-- ----------------------------
INSERT INTO `xiangqinglist` VALUES ('1', '泰勒宁（氨酚羟考酮片）  5mg：325mg*10片', '特价中', ' 氨酚羟考酮片 ', ' 国药集团工业有限公司(Mallinckrodt Inc.) ', ' 国药准字J20171086 ', 'images/1.jpg', '规格：210ml', '1');
INSERT INTO `xiangqinglist` VALUES ('2', '留可然（苯丁酸氮芥片）  2mg*25片', '￥238.00', ' 苯丁酸氮芥片 ', 'Excella GmbH & Co.KG', ' 注册证号H20170291 ', 'images/2.jpg', '规格：320ml', '1');
INSERT INTO `xiangqinglist` VALUES ('3', '复方环磷酰胺片  50mg:50mg*24片', '特价中', ' 复方环磷酰胺片 ', ' 通化茂祥制药有限公司 ', ' 国药准字H22026738 ', 'images/3.jpg', '规格：150ml', '1');
INSERT INTO `xiangqinglist` VALUES ('4', '复可托（脾氨肽口服冻干粉）  2mg*5瓶', '特价中', ' 脾氨肽口服冻干粉 ', ' 浙江丰安生物制药有限公司 ', '国药准字H10970214', 'images/4.jpg', '规格：250ml', '1');
INSERT INTO `xiangqinglist` VALUES ('5', '安素（肠内营养粉剂(TP)）  400g', '特价中', '肠内营养粉剂(TP) ', ' ABBOTT LABORATORIES.B.V. ', ' 注册证号H20181147 ', 'images/5.jpg', '规格：210ml', '1');
INSERT INTO `xiangqinglist` VALUES ('6', '艾力可（维A酸片）  20mg*10片', '特价中', ' 维A酸片 ', ' 山东良福制药有限公司 ', ' 国药准字H10970053 ', 'images/6.jpg', '规格：320ml', '1');
INSERT INTO `xiangqinglist` VALUES ('7', '化癥回生口服液  10ml*6支', '特价中', ' 化癥回生口服液 ', ' 哈药慈航制药股份有限公司 ', ' 国药准字Z10980045 ', 'images/7.jpg', '规格：150ml', '1');
INSERT INTO `xiangqinglist` VALUES ('8', '依木兰（硫唑嘌呤片）  50mg*100片', '￥306.00', '硫唑嘌呤片', 'Excella GmbH & Co.KG', '注册证号H20170288', 'images/8.jpg', '规格：250ml', '1');
INSERT INTO `xiangqinglist` VALUES ('9', '瑞能（肠内营养乳剂(TPF-T)） 200ml', '￥55.00', '肠内营养乳剂(TPF-T)', '费森尤斯卡比华瑞制药有限公司', '国药准字H20040722', 'images/9.jpg', '规格：210ml', '2');
INSERT INTO `xiangqinglist` VALUES ('10', '参一胶囊 10mg*16粒', '特价中', ' 参一胶囊 ', '吉林亚泰制药股份有限公司', ' 国药准字Z20030044 ', 'images/10.jpg', '规格：320ml', '2');
INSERT INTO `xiangqinglist` VALUES ('11', '升血小板胶囊  0.45g*24粒', '￥52.00', '升血小板胶囊', '陕西郝其军制药股份有限公司', '国药准字Z20025029', 'images/11.jpg', '规格：150ml', '2');
INSERT INTO `xiangqinglist` VALUES ('12', '百士欣（乌苯美司胶囊） 10mg*15粒', '￥128.00', '乌苯美司胶囊', '浙江普洛康裕制药有限公司', '国药准字H19980092', 'images/12.jpg', '规格：250ml', '2');
INSERT INTO `xiangqinglist` VALUES ('13', '高三尖杉酯碱注射液 1ml:1mg', '特价中', '高三尖杉酯碱注射液', '杭州民生药业有限公司', '国药准字H33020007', 'images/13.jpg', '规格：210ml', '2');
INSERT INTO `xiangqinglist` VALUES ('14', '艾思瑞（吡非尼酮胶囊） 100mg*54粒', '特价中', '吡非尼酮胶囊', '北京康蒂尼药业有限公司', '国药准字H20133376', 'images/14.jpg', '规格：320ml', '2');
INSERT INTO `xiangqinglist` VALUES ('15', '羟基脲片 500mg*100片', '￥398.00', '羟基脲片', '齐鲁制药有限公司', '国药准字H37021289', 'images/15.jpg', '规格：150ml', '3');
INSERT INTO `xiangqinglist` VALUES ('16', '金克（槐耳颗粒） 20g*6袋', '特价中', '槐耳颗粒', '启东盖天力药业有限公司', '国药准字Z20000109', 'images/16.jpg', '规格：250ml', '3');
INSERT INTO `xiangqinglist` VALUES ('17', '抗癌平丸 1g*18瓶', '￥69.00', '抗癌平丸', '海南龙圣堂制药有限公司', '国药准字Z46020009', 'images/17.jpg', '规格：210ml', '3');
INSERT INTO `xiangqinglist` VALUES ('18', '司莫司汀胶囊 50mg*5粒', '特价中', '司莫司汀胶囊', '浙江瑞新药业股份有限公司', '国药准字H33020804', 'images/18.jpg', '规格：320ml', '3');
INSERT INTO `xiangqinglist` VALUES ('19', '巯嘌呤片 50mg*100片', '￥385.00', '巯嘌呤片', '陕西兴邦药业有限公司', '国药准字H61021058', 'images/19.jpg', '规格：150ml', '3');
INSERT INTO `xiangqinglist` VALUES ('20', '肝复乐片 0.5g*60片', '￥198.00', '肝复乐片', '康哲(湖南)制药有限公司', '国药准字Z10940066', 'images/20.jpg', '规格：250ml', '4');
INSERT INTO `xiangqinglist` VALUES ('21', '清肺散结丸 3g*6瓶', '￥148.00', '清肺散结丸', '海南龙圣堂制药有限公司', '国药准字Z20026833', 'images/21.jpg', '规格：210ml', '4');
INSERT INTO `xiangqinglist` VALUES ('22', '西黄丸 3g*2瓶', '￥699.00', '西黄丸', '九寨沟天然药业集团有限责任公司', '国药准字Z51021028', 'images/22.jpg', '规格：320ml', '4');
INSERT INTO `xiangqinglist` VALUES ('23', '巯嘌呤片 50mg*50片', '￥35.00', '巯嘌呤片', '浙江浙北药业有限公司', '国药准字H33020001', 'images/23.jpg', '规格：150ml', '4');
INSERT INTO `xiangqinglist` VALUES ('24', '五海瘿瘤丸 9g*8丸（大蜜丸）', '￥148.00', '五海瘿瘤丸', '吉林国药制药有限责任公司', '国药准字Z22021711', 'images/24.jpg', '规格：250ml', '4');
SET FOREIGN_KEY_CHECKS=1;
