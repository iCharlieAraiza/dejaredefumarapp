const Avatar = ({username}) => {
  return (
    <div className='avatar-circle'>
      <span className='avatar-circle__text'>
        {username.slice(0, 2)}
      </span>
    </div>
  )
}

export default Avatar