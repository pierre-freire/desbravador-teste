import axios from "axios";

const gitToken =
	"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";
const baseURL = "https://api.github.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${gitToken}`;

export async function listUsers() {
	axios
		.get(`${baseURL}/users`)
		.then(function (response) {
			// handle success
			console.log(response);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.finally(function () {
			// always executed
		});
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
