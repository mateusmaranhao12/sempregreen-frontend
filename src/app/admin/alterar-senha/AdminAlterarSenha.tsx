'use client'

import Label from '@/components/labels/Label'
import Input from '@/components/inputs/InputText'
import Button from '@/components/buttons/Button'
import Form from '@/components/forms/Form'
import FormContainer from '@/components/forms/FormContainer'

export default function AdminAlterarSenha() {
    return (
        <FormContainer>
            <div className="bg-white rounded shadow p-6 w-full max-w-2xl">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">Alteração de Senha</h1>
                <p className="text-sm text-gray-700 mb-6">
                    Informe sua senha antiga por favor, por motivos de segurança, e então informe sua nova senha duas vezes para que possamos verificar se você digitou tudo corretamente.
                </p>

                <Form>
                    {/* Senha antiga */}
                    <div>
                        <Label htmlFor="senha-antiga">Senha antiga:</Label>
                        <Input className='w-full' id="senha-antiga" type="password" placeholder="Digite sua senha atual" />
                    </div>

                    {/* Nova senha */}
                    <div>
                        <Label htmlFor="nova-senha">Nova senha:</Label>
                        <Input className='w-full' id="nova-senha" type="password" placeholder="Digite a nova senha" />
                        <ul className="text-xs text-gray-600 mt-2 space-y-1">
                            <li>Sua senha não pode ser muito parecida com o resto das suas informações pessoais.</li>
                            <li>Sua senha precisa conter pelo menos 8 caracteres.</li>
                            <li>Sua senha não pode ser uma senha comumente utilizada.</li>
                            <li>Sua senha não pode ser inteiramente numérica.</li>
                        </ul>
                    </div>

                    {/* Confirmação */}
                    <div>
                        <Label htmlFor="confirmar-senha">Confirmação da nova senha:</Label>
                        <Input className='w-full' id="confirmar-senha" type="password" placeholder="Confirme a nova senha" />
                    </div>

                    {/* Botão */}
                    <div className="mt-4">
                        <Button variant="green" type="submit" className="w-full md:w-auto">
                            Alterar minha senha
                        </Button>
                    </div>
                </Form>
            </div>
        </FormContainer>
    )
}
