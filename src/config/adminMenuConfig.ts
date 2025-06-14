export type AdminMenuItem = {
  label: string
  actions?: ('add' | 'edit' | 'view')[]
}

export type AdminMenuSection = {
  title: string
  items: AdminMenuItem[]
}

export const adminMenuSections: AdminMenuSection[] = [
  {
    title: "1 - APOSTAS",
    items: [
      { label: "Usuários", actions: ['add', 'edit'] },
      { label: "Casas de aposta", actions: ['add', 'edit'] },
      { label: "Sub casas de aposta", actions: ['add', 'edit'] },
      { label: "Esportes", actions: ['add', 'edit'] },
      { label: "Mercados", actions: ['add', 'edit'] },
      { label: "Sub esportes", actions: ['add', 'edit'] },
      { label: "Proxies", actions: ['add', 'edit'] },
      { label: "Acessos", actions: ['add', 'edit'] },
      { label: "Odds", actions: ['view'] },
      { label: "Customizar", actions: ['edit'] },
    ]
  },
  {
    title: "2 - PAGAMENTOS",
    items: [
      { label: "Planos", actions: ['add', 'edit'] },
      { label: "Períodos", actions: ['add', 'edit'] },
      { label: "Assinaturas", actions: ['add', 'edit'] },
      { label: "MercadoPago", actions: ['edit'] },
    ]
  },
  {
    title: "3 - AUTENTICAÇÃO E AUTORIZAÇÃO",
    items: [
      { label: "Grupos", actions: ['add', 'edit'] },
    ]
  },
  {
    title: "4 - SITE",
    items: [
      { label: "Site", actions: ['add', 'edit'] },
    ]
  }
]
