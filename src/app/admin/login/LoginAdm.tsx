'use client'

import Form from '@/components/forms/Form'
import FormContainer from '@/components/forms/FormContainer'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import { useRouter } from 'next/navigation'

export default function LoginAdm() {

    const router = useRouter()

    return (
        <FormContainer>
            <div className="bg-white shadow-md rounded w-full max-w-sm">
                <div className="bg-[#064D37] text-yellow-300 px-4 py-3 rounded-t text-sm font-bold">
                    Admin
                </div>
                <div className="h-1 bg-green-400 w-full" />
                <div className="p-4">
                    <Form>
                        <div className="text-left">
                            <label htmlFor="email" className="block text-sm mb-1">Email:</label>
                            <Input className='w-full' type="email" id="email" name="email" />
                        </div>

                        <div className="text-left">
                            <label htmlFor="senha" className="block text-sm mb-1">Senha:</label>
                            <Input className='w-full' type="password" id="senha" name="senha" />
                        </div>

                        <Button
                            type="button"
                            variant="green"
                            onClick={() => router.push('/admin/dashboard')}
                        >
                            Acessar
                        </Button>
                    </Form>
                </div>
            </div>
        </FormContainer>
    )
}
