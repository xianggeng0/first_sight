const Icon = ({ type }) => {
  return (
    <img
      src={`https://account--book.oss-cn-beijing.aliyuncs.com/Account/${type}.svg`}
      alt="icon"
      style={{
        width: 20,
        height: 20,
      }}
    />
  )
}

export default Icon