/*
 * @Author: yangyuan
 * @Date: 2020-01-07 17:00:32
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2020-01-07 17:04:06
//  * @Description: 
 */
// 看看 ~1 的计算步骤
// 1.将1转成二进制 = 00000001  // 8位
// 2.按位取反 = 11111110
// 3.发现符号位(即最高位)为1(表示负数),将符号位之外的其他数字取反 = 10000001
// 4.末位加1取其补码 = 10000010
// 5.转回十进制 = -2
