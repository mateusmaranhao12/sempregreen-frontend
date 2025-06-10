import Button from "@/components/Button";
import Form from "@/components/Form";
import FormContainer from "@/components/FormContainer";
import Input from "@/components/Input";
import Logo from "@/components/LogoCompleta";
import { useRouter } from "next/navigation";

export default function EsqueciSenhaForm() {

    const router = useRouter()

    return (
        <FormContainer>
            <Logo />

            <Form>
                <label className="text-white mb-0">E-mail</label>
                <Input type="email" placeholder="Seu email" />
                <Button variant="green">
                    Redefinir
                </Button>
                <Button
                    variant="yellow"
                    type="button"
                    onClick={() => router.push('/login')}
                >Voltar para o login
                </Button>
            </Form>

            <p className="mt-10 text-white text-sm mb-5">Todos os direitos reservados 2025</p>
        </FormContainer>
    );
}
