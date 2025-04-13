import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Titulo fontSize={20}>Marcos Viana</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      marcosvianalmv
    </Paragrafo>
    <Paragrafo fontSize={12}>Desenvolvedor Front-end</Paragrafo>
    <button>Trocar tema</button>
  </aside>
)

export default Sidebar
