import Image from 'next/image';
import Link from 'next/link';
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

export default function Home() {
  const bg = '/bg-cover.jpg';
  const socialLinks = [
    {
      name: 'Instagram',
      Url: '/',
      icon: <AiFillInstagram size={20} />,
    },
    {
      name: 'Youtube',
      Url: '/',
      icon: <AiFillYoutube size={20} />,
    },
    {
      name: 'WhatsApp',
      Url: '/',
      icon: <AiOutlineWhatsApp size={20} />,
    },
    {
      name: 'Telegram',
      Url: '/',
      icon: <FaTelegram size={20} />,
    },
    {
      name: 'Linkedin',
      Url: '/',
      icon: <AiFillLinkedin size={20} />,
    },
  ];
  const QuickLinks = [
    {
      nome: 'Meu Portifólio',
      Url: '/',
      icon: '',
    },
    {
      nome: 'Canal no youtube',
      Url: '/',
      icon: '',
    },
    {
      nome: 'Meu curso de programação',
      Url: '/',
      icon: '',
    },
    {
      nome: 'Meu Portifólio',
      Url: '/',
      icon: '',
    },
  ];
  return (
    <>
      <div className="w-full py-[40px] h-screen flex itens-center justify-center bg-zinc-50 ">
        <div className="w-[300px]  bg-zinc-100 ">
          <div
            className="w-full h-[110px] relative "
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <Image
              alt="Imagem de perfil do Juliano Santos"
              width={114}
              height={114}
              quality={100}
              src="https://avatars.githubusercontent.com/u/119906141?v=4"
              className="rounded-full bg-zinc-950 p-2 h-[114px] w-[114px] absolute top-14 left-24 border border-zinc-50 border-[3.2px] "
            />
          </div>
          <div className=" w-full mt-16 h-20 flex flex-col itens-center justify-start text-center">
            <h1 className="font-bold text-zinc-950">Juliano Santos</h1>
            <span className="text-[10px] font-normal text-zinc-500">
              Developer Front-End
            </span>
            <div className="flex itens-center justify-center gap-2 mt-2">
              {socialLinks.map((link) => (
                <Link
                  className="hover:bg-zinc-200 p-1 rounded-full duration-500 transition-all"
                  href={link.Url}
                >
                  {link.icon}{' '}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-4 p-2">
            {QuickLinks.map((link) => (
              <Link
                className="w-[236px] text-[10px] bg-zinc-900 text-zinc-50 p-2 rounded-lg flex justify-between items-center hover:scale-105 duration-500 transition-all"
                href={link.Url}
              >
                {link.nome}
                <BsFillArrowUpRightCircleFill size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
