# 快速回忆选择器
1. (>)子元素选择器 : 
    > 与后代元素选择器相比，子元素选择器选取的一定是直接后代（儿子）
2. (+)相邻兄弟选择器 : 
    > 选择紧连着另一元素*后的元素，二者具有相同的父元素。只会选择的一个相邻的匹配元素。
3. (~)后续兄弟选择器 :
    > 选取所有指定元素之后的相邻兄弟元素，与相邻兄弟元素选择器相比，相邻兄弟元素选择器 只是选择紧跟着的兄弟元素，后续元素选择器选择
      所有符合条件的兄弟元素


# 伪类&伪元素
1.  伪元素以::开头，伪类以:开头
2.  :nth-child()  ::before  ::after  :hover :link