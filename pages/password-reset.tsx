
import Input from "@/components/ui/Input";
import React, { useState, useEffect } from "react";
import { User } from '@supabase/supabase-js';
import { supabase } from "@/utils/supabase-client";
import Button from 'components/ui/Button';


function PasswordReset({ user }: { user: User }) {
  
  
	const [updatedUser, setUpdatedUser] = useState<User | null>(null);
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<{ type?: string; content?: string }>({
		type: '',
		content: ''
	});
  // const router = useRouter();

	
	const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setMessage({})

		const { 
			data: {user: updatedUser}, 
			error 
		} = await supabase.auth.updateUser({
			 password: password,
			 
		});
		if (error) {
			setMessage({ type: 'error', content: error.message });
		} else
		if (updatedUser)  {
			setUpdatedUser(updatedUser)
		} else {
			setMessage({
				type: 'note',
				content: 'Check your email for the confirmation link.'
			});
		}
		setLoading(false)
	};
	useEffect(() => {
		supabase.auth.onAuthStateChange(async (event: string, session: any) => {
			const { data, error } = await supabase.auth.updateUser({
				password: password,
			})
			if (event == "PASSWORD_RECOVERY") {

				if (data) alert("Password updated successfully!")
				if (error) alert("There was an error updating your password.")
			}
		})
	}, [updatedUser, user]);
	return (
		<div>
			<div className=" my-8 text-center text-4xl">
			  <h1>Password reset</h1>
			</div>
			<form onSubmit={(e) => handlePasswordChange(e)}>
				{message.content && (
					<div
						className={`${message.type === 'error' ? 'text-pink-500' : 'text-green-500'
							} border ${message.type === 'error'
								? 'border-pink-500'
								: 'border-green-500'
							} p-3`}
					>
						{message.content}
					</div>
				)}
				<Input
					type="password"
					required			
					placeholder="Please enter your new Password"
					onChange={(e) => setPassword(e)}
					className="mb-2"
                    
				/>

				<Button
					variant="slim"
					type="submit"
					loading={loading}
					disabled={loading || password.length < 5}
				>
					change 
				</Button>
			</form>
			<p></p>
		</div>
	);
}

export default PasswordReset;