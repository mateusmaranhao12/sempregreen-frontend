'use client'

import { useState } from 'react';
import Input from '@/components/inputs/InputText';
import Button from '@/components/buttons/Button';
import Label from '@/components/labels/Label';
import Select from '@/components/inputs/InputSelect';

export default function FiltrosDashboard() {
    const [oddMin, setOddMin] = useState(0);
    const [oddMax, setOddMax] = useState(100);
    const [lucroMin, setLucroMin] = useState(0);
    const [lucroMax, setLucroMax] = useState(1000);
    const [intervalo, setIntervalo] = useState(5);
    const [horario, setHorario] = useState('Qualquer horário');
    const [ordem, setOrdem] = useState('Lucro decrescente');
    const [todasCasas, setTodasCasas] = useState(true);

    return (
        <div className="font-bold text-center py-2">

            <div className="bg-green-900 text-white p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col">
                    <Label>Odd de</Label>
                    <Input
                        type="number"
                        value={oddMin}
                        onChange={(e) => setOddMin(Number(e.target.value))}
                    />
                </div>
                <div className="flex flex-col">
                    <Label>Odd até</Label>
                    <Input
                        type="number"
                        value={oddMax}
                        onChange={(e) => setOddMax(Number(e.target.value))}
                    />
                </div>
                <div className="flex flex-col">
                    <Label>De % lucro</Label>
                    <Input
                        type="number"
                        value={lucroMin}
                        onChange={(e) => setLucroMin(Number(e.target.value))}
                    />
                </div>
                <div className="flex flex-col">
                    <Label>Até % lucro</Label>
                    <Input
                        type="number"
                        value={lucroMax}
                        onChange={(e) => setLucroMax(Number(e.target.value))}
                    />
                </div>

                <div className="flex flex-col">
                    <Label>Atualizar a cada X segundos</Label>
                    <Input
                        type="number"
                        value={intervalo}
                        onChange={(e) => setIntervalo(Number(e.target.value))}
                    />
                </div>
                <div className="flex flex-col">
                    <Label>Em</Label>
                    <Select value={horario} onChange={(e) => setHorario(e.target.value)}>
                        <option>Qualquer horário</option>
                        <option>Ao vivo</option>
                        <option>Hoje</option>
                    </Select>
                </div>

                <div className="flex flex-col">
                    <Label>Ordenar por</Label>
                    <Select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                        <option>Lucro decrescente</option>
                        <option>Lucro crescente</option>
                        <option>Odd mais alta</option>
                    </Select>
                </div>

                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={todasCasas}
                        onChange={() => setTodasCasas(!todasCasas)}
                    />
                    <span>Todas as Casas</span>
                </label>
            </div>

            {/* Casas específicas */}
            <div className="bg-green-900 p-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                <Button variant="white">UmDois</Button>
                <Button variant="white">1win</Button>
                <Button variant="white">1XBET</Button>
                <Button variant="white">Outras...</Button>
            </div>
        </div>
    );
}
