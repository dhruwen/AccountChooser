// Temporary folder to store account data
const tempFolder = {};

// Example accounts (replace with real data if needed)
const accounts = [
  {
    id: 1,
    email: "shadiram803@gmail.com",
    profilePhoto: "https://via.placeholder.com/50?text=U"
  },
  {
    id: 2,
    email: "user2@protonmail.com",
    profilePhoto: "https://via.placeholder.com/50?text=P"
  }
];

// Function to render accounts
function renderAccounts() {
  const accountList = document.getElementById("accountList");
  accountList.innerHTML = ""; // Clear existing accounts

  accounts.forEach(account => {
    const accountItem = document.createElement("div");
    accountItem.classList.add("account-item");
    accountItem.onclick = () => handleAccountClick(account);

    // Profile photo
    const profilePhoto = document.createElement("div");
    profilePhoto.classList.add("profile-photo");
    profilePhoto.style.backgroundImage = `url(${account.profilePhoto})`;
    profilePhoto.style.backgroundSize = "cover";
    profilePhoto.style.backgroundPosition = "center";

    // Account details
    const accountDetails = document.createElement("div");
    accountDetails.classList.add("account-details");
    accountDetails.innerHTML = `
      <div class="account-email">${account.email}</div>
    `;

    accountItem.appendChild(profilePhoto);
    accountItem.appendChild(accountDetails);
    accountList.appendChild(accountItem);
  });
}

// Function to handle account click
function handleAccountClick(account) {
  const email = account.email;

  // Check if the account is already in the temp folder
  if (tempFolder[email]) {
    alert(`Welcome back, ${email}!`);
  } else {
    // Simulate fetching profile photo (use placeholder for now)
    const profilePhoto = account.profilePhoto;

    // Save data to the temp folder
    tempFolder[email] = {
      email: email,
      profilePhoto: profilePhoto
    };

    alert(`Account added to temp folder: ${email}`);
  }

  // Optionally, log the temp folder to see the stored data
  console.log(tempFolder);
}

// Function to add a new account
function addNewAccount() {
  const newEmail = prompt("Enter the new email address:");
  if (newEmail) {
    const newAccount = {
      id: accounts.length + 1,
      email: newEmail,
      profilePhoto: `https://via.placeholder.com/50?text=${newEmail.charAt(0).toUpperCase()}`
    };
    accounts.push(newAccount);
    renderAccounts();
  }
}

// Initialize the account list rendering
renderAccounts();