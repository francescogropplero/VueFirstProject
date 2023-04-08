import {render, screen} from "@testing-library/vue";

import ProfileImage from "@/components/ProfileImage.vue";

describe("ProfileImage", ()=>{
    it("displays profile image",()=>{
        render(ProfileImage);
        screen.debug();
    })
})