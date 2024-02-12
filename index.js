<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Updates Progress</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #3da2c3; /* Blue */
        }

        .card {
            background-color: #ffffff; /* White */
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .card-body {
            padding: 20px;
        }

        h2 {
            color: #333333; /* Dark Gray */
        }

        .badge {
            background-color: #dc3545; /* Red */
            color: #ffffff; /* White */
            padding: 5px 10px;
            border-radius: 20px;
        }

        .text-muted {
            color: #a2aab7; /* Light Gray */
        }

        .list-group-item {
            background-color: transparent;
            border: none;
            padding: 10px 0;
        }

        .list-group-item s {
            color: #a2aab7; /* Light Gray */
        }

        .divider {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }

        .divider:after,
        .divider:before {
            content: "";
            flex: 1;
            height: 1px;
            background: #eee; /* Light Gray */
        }
    </style>
</head>
<body>
    <section class="vh-100" style="background-color: #3da2c3;">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-8 col-xl-6">
                    <div class="card rounded-3">
                        <div class="card-body p-4">
                            <p class="mb-2"><span class="h2 me-2">Team Meeting</span> <span
                                    class="badge bg-danger">checklist</span></p>
                            <p class="text-muted pb-2">04/01/2020 • ML - 1321</p>
                            <ul class="list-group rounded-0">
                                <li class="list-group-item border-0 d-flex align-items-center ps-0">
                                    <s>Task list and assignments</s>
                                </li>
                                <li class="list-group-item border-0 d-flex align-items-center ps-0">
                                    Set due date and assignments
                                </li>
                                <li class="list-group-item border-0 d-flex align-items-center ps-0">
                                    Remove duplicate tasks and stories
                                </li>
                                <li class="list-group-item border-0 d-flex align-items-center ps-0">
                                    Update the userflow and stories
                                </li>
                                <li class="list-group-item border-0 d-flex align-items-center ps-0">
                                    Adjust the components
                                </li>
                            </ul>
                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center mx-3 mb-0" style="color: #a2aab7;">Shared with</p>
                            </div>
                            <ul class="list-group rounded-0 list-group-horizontal justify-content-center pb-2">
                                <li class="list-group-item border-0 d-flex align-items-center p-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                        alt="avatar" class="rounded-circle me-n2" width="45">
                                </li>
                                <li class="list-group-item border-0 d-flex align-items-center p-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                        alt="avatar" class="rounded-circle me-n2" width="45">
                                </li>
                                <li class="list-group-item border-0 d-flex align-items-center p-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                        alt="avatar" class="rounded-circle me-n2" width="45">
                                </li>
                                <li class="list-group-item border-0 d-flex align-items-center p-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                        alt="avatar" class="rounded-circle me-n2" width="45">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
