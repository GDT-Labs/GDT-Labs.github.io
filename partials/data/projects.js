const projects = [
  {
    label: "IoT",
    data: [
      {
        title: "Incident Management System",
        description: "The IMS is a custom, purpose built solution demonstrating the integration of edge sensors, such a temperature, humidity and vibration with a message broker to distribute that data to analytics platforms of choice.  Those platforms can then make intelligent decisions on how to respond to data anomalies.  GDT has built a monitoring tool that will detect incidents, create a Spark room for critical team members to collaborate, and feed real time information about the incident into the Spark room.  Additionally, the IMS will open a ServiceNow ticket to capture all information that is being generated in the Spark room.  Once the incident is resolved, the Spark room is disbanded and the ServiceNow ticket is closed.",
        link: "https://youtu.be/igC55Pxh0og"
      }
    ]
  },
  {
    label: "Spark",
    data: [
      {
        title: "Spark Haus",
        description: "A customer facing event driving the adoption of Cisco Spark.  Set in an engineering friendly environment, the Spark Haus event features use cases, demos and the ability to develop your own Spark bots.  Funded in part by Cisco, GDT will have two hosted sessions at headquarters to showcase our capabilities and involvement with this platform."
      },
      {
        title: "@Mention",
        description: "Cisco Spark today does not support a way to notify all members of a Space with a single message.  Other chatroom products provide an @channel or @all function to address everyone in the channel. This bot, when mentioned, creates a new message with all room members mentioned for notification and inclusion."
      },
      {
        title: "Announcer",
        description: "A smart messaging bot for creating announcements in Spark with lots of recipients. Built as a Cisco Spark and AWS Lambda integration, this bot will parse your direct message for recipients in comma-separated or newline-separated format, validate your permissions to broadcast to those users by company and number, and then update you on the progress of your announcement -- all powered in a scalable way in the AWS cloud."
      },
      {
        title: "Lunchbot",
        description: "Posts a daily lunch spot suggestion, culled from submitted user suggestions.  Provides menu links and map directions to the locations."
      },
      {
        title: "XKCD",
        description: "Posts the popular web comic daily for your entertainment."
      },
      {
        title: "APOD",
        description: "Provides a daily look at NASAs Astronomy Picture of the Day."
      }
    ]
  },
  {
    label: "VRO_VRA",
    data: [
      {
        title: "Workflow for User On/Off-boarding",
        description: "Demonstrates the ability to create new users linked to Microsoft AD and other systems through the use of vRealize Automation self-service portal driving vRealize Orchestration workflows.  The ability to also remove users from all systems via the same methodology closes the loop and provides a complete user management flow."
      }
    ]
  },
  {
    label: "Ansible",
    data: [
      {
        title: "Staging Automation System",
        description: "A comprehensive software suite with Ansible at its core, designed to drive automation into the staging area.  Manages pull requests, executes jobs and greatly reduces the time needed to provision infrastructure by automating MOPs developed by the engineering teams.  Reporting and analysis modules also provide clear and detailed feedback both from a QA perspective on successful or failed jobs, to metrics demonstrating costs and savings for each automation run."
      },
      {
        title: "Project Condor",
        description: "Stealth project involving deploying and provisioning OEM switches with proper images, base configs and business logic."
      }
    ]
  }
];