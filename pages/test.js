import AtomText from "../component/atoms/paragprah";
import AtomButton from "../component/atoms/button";

export default function test() {
    return (<>
        <div className="container">
            <AtomText value="Armando" weight="bold" size="24px" />

            <AtomText value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <AtomButton value="Simpan" padding="5px 10px" background="blue" border="1px solid" radius="5px" />
        </div>
    </>);
}