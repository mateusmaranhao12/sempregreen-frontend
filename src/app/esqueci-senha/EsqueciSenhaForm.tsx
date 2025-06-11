import Button from "@/components/buttons/Button";
import Form from "@/components/forms/Form";
import FormContainer from "@/components/forms/FormContainer";
import Input from "@/components/inputs/InputText";
import Logo from "@/components/logos/LogoCompleta";
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
