type props = {
import { title } from './title';
    title: string;
};

export function title ({title}: props){
    return
    <div className="text-5xl border-b-4 border-b-evergreen-light w-fit font-bold text-evergreen"></div>
}