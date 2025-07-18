import Button from "@/components/buttons/Button";
import Form from "@/components/forms/Form";
import FormContainer from "@/components/forms/FormContainer";
import Input from "@/components/inputs/InputText";
import Logo from "@/components/logos/LogoCompleta";
import { useRouter } from "next/navigation";

export default function LoginForm() {

  const router = useRouter()

  return (
    <FormContainer>
      <Logo />

      <Form>
        <Input type="email" placeholder="Seu email" />
        <Input type="password" placeholder="Senha" />

        <Button
          variant="yellow"
          type="button"
          onClick={() => router.push('/dashboard')}
        >Entrar</Button>

        <p className="text-white text-sm text-center">
          Ainda não é cadastrado? Utilize o botão abaixo e se cadastre agora mesmo
        </p>

        <Button
          variant="blue"
          type="button"
          onClick={() => router.push('/cadastro')}
        >Cadastrar-me
        </Button>
        <Button
          variant="white"
          type="button"
          onClick={() => router.push('/esqueci-senha')}
        >Esqueci minha senha</Button>
      </Form>

      <p className="mt-10 text-white text-sm mb-5">Todos os direitos reservados 2025</p>
    </FormContainer>
  );
}
