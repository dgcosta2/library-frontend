
let titleHost = "http://localhost:8060";
let memberHost = "http://localhost:8080";

let findAllTitles = () => {
    return (
        fetch(titleHost + "/titles")
            .then(response => response.json())
    )
}

let findAllMembers = () => {
    return (
        fetch(memberHost + "/members")
            .then(response => response.json())
    )
}

let reserveTitle = (title, memberId) => {
    return (
        fetch(titleHost + "/titles/" + title.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                reserveStatus: true,
                memberId: memberId
                }
            )}).then(response =>
            {
                if (response.status == 200 || response.status == 201 || reponse.status == 204) return response.json();
                return null;
            })
                // .then(id => id)
                // .catch(error => {
                //     console.log(error);
                //     return null;
                // })
    )
}

let renewTitle = (title) => {
    return (
        fetch(titleHost + "/titles/renew/" + title.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response =>
        {
            if (response.status == 200 || response.status == 201 || response.status == 204) return true;
            return null;
        })
    )
}

let findTitlesByMember = (member) => {
    return (
        fetch(titleHost + "/titles/members/" + member.id)
            .then(response => response.json())
    )
}

let data = {
    titles : findAllTitles,
    members : findAllMembers,
    reserve: reserveTitle,
    renew: renewTitle,
    titlesByMember: findTitlesByMember
}

export default data;