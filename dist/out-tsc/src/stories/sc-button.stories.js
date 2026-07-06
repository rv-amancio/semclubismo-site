import { ScButtonComponent } from '../app/shared/ui/sc-button/sc-button.component';
const meta = { title: 'Sem Clubismo/UI/Button', component: ScButtonComponent, tags: ['autodocs'], argTypes: { variant: { control: 'select', options: ['primary', 'secondary'] } } };
export default meta;
export const Primary = { args: { variant: 'primary', href: '#' }, render: args => ({ props: args, template: `<sc-button [variant]="variant" [href]="href">Ver episódios</sc-button>` }) };
export const Secondary = { args: { variant: 'secondary', href: '#' }, render: args => ({ props: args, template: `<sc-button [variant]="variant" [href]="href">Conhecer equipe</sc-button>` }) };
