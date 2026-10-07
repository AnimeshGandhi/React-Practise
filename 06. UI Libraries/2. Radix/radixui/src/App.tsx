
import './App.css'
import { Theme } from "@radix-ui/themes";
import MyApp from './MyApp';
export default function App() {
	return (
		<html>
			<body>
				<Theme>
					<MyApp />
				</Theme>
			</body>
		</html>
	);
}

