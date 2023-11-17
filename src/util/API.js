import axios from "axios";
const baseURL = "https://api.github.com";

/*const gitToken =
	"seu token aqui";
axios.defaults.headers.common["Authorization"] = `Bearer ${gitToken}`;*/

export async function listUsers() {
	try {
		const response = await axios.get(`${baseURL}/users`);
		return response.data;
	} catch (err) {
		return err;
	}
}

export async function searchUser(user) {
	try {
		const response = await axios.get(`${baseURL}/users/${user}`);
		return response.data;
	} catch (err) {
		return err;
	}
}

export async function getUserRepos(user) {
	try {
		const response = await axios.get(`${baseURL}/users/${user}/repos`);
		return response.data;
	} catch (err) {
		return err;
	}
}

export async function getRepoInfo(user, repo) {
	try {
		const response = await axios.get(`${baseURL}/repos/${user}/${repo}`);
		return response.data;
	} catch (err) {
		return err;
	}
}
