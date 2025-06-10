import Button from "@/components/Button";
import Input from "@/components/Input";
import Logo from "@/components/Logo";

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-[#0e2a20] flex flex-col items-center px-4 justify-start pt-8 md:justify-center md:pt-0">
      <Logo />

      <form className="w-full max-w-sm flex flex-col gap-4">
        <Input type="email" placeholder="Seu email"/>
        <Input type="password" placeholder="Senha"/>
        
        <Button variant="yellow">Entrar</Button>

        <p className="text-white text-sm text-center">
          Ainda não é cadastrado? Utilize o botão abaixo e se cadastre agora mesmo
        </p>

        <Button variant="blue">Cadastrar-me</Button>
        <Button variant="white">Esqueci minha senha</Button>
      </form>

      <p className="mt-10 text-white text-sm">Todos os direitos reservados 2025</p>
    </div>
  );
}
