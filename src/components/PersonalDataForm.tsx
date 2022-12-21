import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
interface IUser {
    name: string;
    lastName: string;
    birthdate: string;
    gender: any;
    email: string;
    newsletter: boolean;
}
export function PersonalDataForm() {
    const user: IUser = {
        name: '',
        lastName: '',
        birthdate: '',
        gender: '',
        email: '',
        newsletter: false,
    };

    const [form, setform] = useState(user);

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
    };

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setform({
            ...form,
            [element.name]:
                element.type === 'checkbox' ? element.checked : element.value,
        });
    };

    const personalDataForm = () => {
        const template = (
            <>
                <h2>Personal Data</h2>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <legend>Name</legend>
                        <input
                            type="text"
                            name="name"
                            placeholder="Write first name"
                            value={form.name}
                            onInput={handleForm}
                            required
                        />
                    </div>
                    <div>
                        <legend>Last Name</legend>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Write last name"
                            value={form.lastName}
                            onInput={handleForm}
                        />
                    </div>
                    <div>
                        <legend>BirthDate</legend>
                        <input
                            type="date"
                            name="birthdate"
                            value={form.birthdate}
                            onInput={handleForm}
                        />
                    </div>
                    <div>
                        <legend>Gender</legend>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value={'Female'}
                                checked={form.gender === 'Female'}
                                onChange={handleForm}
                            />{' '}
                            Female
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value={'Male'}
                                checked={form.gender === 'Male'}
                                onChange={handleForm}
                            />{' '}
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value={'Other'}
                                checked={form.gender === 'Other'}
                                onChange={handleForm}
                            />{' '}
                            Other
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value={'confused'}
                                checked={form.gender === 'confused'}
                                onChange={handleForm}
                            />{' '}
                            I´m still confused
                        </label>
                    </div>
                    <div>
                        <legend>Email</legend>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onInput={handleForm}
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <legend>
                            I would love to received the newsletter, I am
                            missing yours
                        </legend>
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={form.newsletter}
                            onChange={handleForm}
                        />
                        <p> I am accepting the terms of use</p>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={() => {
                                <Link className="link" to="/step 2"></Link>;
                            }}
                        >
                            Next
                        </button>
                    </div>
                </form>
            </>
        );

        return template;
    };

    return personalDataForm();
}
