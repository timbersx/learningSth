给出一些结论

# 1. Infinite === Infinite 会返回true

# 2. NaN === NaN 会返回false

# 3. undefined === undefined 会返回true

# 4. null === null 会返回true

# 5. null == undefined 会返回true

# 6. null === undefined 会返回false

# 6. Infinity === Infinity + 1 会返回true

about xhr

<code>
function sendMessage() {
  let xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.responseType = type
  xhr.onload = function() {
    callBack(xhr.response)
  }
  xhr.send()
}
</code>
