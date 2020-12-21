/* eslint-disable */
import { provide, inject } from "vue";

const createProfile = config => ({ //config es lo que se le pasa en forma de objeto
    name: config.name,
    age: config.age,
    skills: config.skills,
    $skill(key) { //for gettin any skill
        return this.skills[key];
    }
});

/* util para inyectar y proveer la información al usar el plugin */
const profileSymbol = Symbol();

export const provideProfile = ( profileConfig ) => {
    const profile = createProfile(profileConfig);
    provide(profileSymbol,profile);
}


// Injection plugin for using it
export const useProfile = () => {
    const profile = inject(profileSymbol);
    // si no esta disponible
    if(!profile){
        throw new Error("No profile, wrog definition");
    }
    return profile;
}
