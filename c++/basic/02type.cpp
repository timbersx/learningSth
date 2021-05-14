#include <iostream>
using namespace std;

int main()
{
  // 可以使用 typedef 为一个已有的类型取一个新的名字
  typedef int feet;
  // 枚举类型，创建一个枚举类型的变量c
  enum color { red = 4, blue, green } c;
  c = blue;
  cout << "Size of char" << sizeof(char) << endl;
  cout << "Size of int" << sizeof(feet) << endl;
  cout << blue << endl;
  return 0;
}
