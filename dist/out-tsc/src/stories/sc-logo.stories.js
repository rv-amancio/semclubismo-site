import { ScLogoComponent } from '../app/shared/ui/sc-logo/sc-logo.component';
const meta = { title: 'Sem Clubismo/Brand/Logo', component: ScLogoComponent, tags: ['autodocs'], argTypes: { variant: { control: 'select', options: ['full', 'mark'] } } };
export default meta;
export const Full = { args: { variant: 'full' } };
export const Mark = { args: { variant: 'mark' } };
