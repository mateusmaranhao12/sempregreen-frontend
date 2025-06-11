import Button from "@/components/buttons/Button";
import Form from "@/components/forms/Form";
import FormContainer from "@/components/forms/FormContainer";
import Input from "@/components/inputs/InputText";
import Logo from "@/components/logos/LogoCompleta";
import { useRouter } from "next/navigation";

export default function CadastroForm() {

    const router = useRouter()

    return (
        <FormContainer>
            <Logo />

            <Form>
                <Input type="text" placeholder="Seu nome" />
                <Input type="email" placeholder="Seu email" />
                <Input type="phone" placeholder="WhatsApp" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme sua senha" />

                <Button variant="yellow">Criar conta</Button>

                <p className="text-white text-sm text-center">
                    Já possui uma conta? Utilize o botão abaixo e acesse agora mesmo.
                </p>

                <Button
                    variant="blue"
                    type="button"
                    onClick={() => router.push('/login')}
                >Acessar minha conta
                </Button>
            </Form>

            <p className="mt-10 text-white text-sm mb-5">Todos os direitos reservados 2025</p>
        </FormContainer>
    );
}
