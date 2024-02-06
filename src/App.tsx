import logo from './assets/logo-nlw-experts.svg'

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12'>
      <img
        src={logo}
        alt="logo da nlw" />
      <form
        action=""
        className='w-full'>
        <input
          type="text"
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
          placeholder='Busque em suas notas...' 
        />
      </form>
    </div>
  )
}

