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
  },
  {
    label: "Presales",
    data: [
      {
        title: "North Central Texas Council of Governments (NTCTOG",
        description: "Is a data warehouse project to update their SQL Server data systems, involving ETL of many disparate data sources into one data system which can ingest these various sources and supply data for BI projects in MS Power BI as well as supporting NCTOG's ongoing 911 and e911 services. It includes data sources such as call center data, CDRs (Call Data Records), geodata, and reporting."
      },
    ]
  },
  {
    label: "External",
    data: [
      {
        title: "SES",
        description: "GDT to provide back-end services for their Network Observer Portal(NOP). The NOP enables users to view metrics data that has been collected about various networked devices. APIs are provided to the NOP front end allowing this data to be retrieved, queried and aggregated, with the results being presented as either raw time series data or in a format ready to be presented as a number of different types of graphs."
      },
      {
          title: "T-Mobile",
          description: "<strong>EPIF</strong>: Build a solution that will give engineers electronic access to a information store where work orders describing the job are accessible and able to be modified on the fly. Full audit controls allow for forensic tracking of all document changes.<br><br><strong>Port decommission</strong>: Build a solution to allow the operational teams at T-Mobile to automate port decommissioning on network devices. We propose to automate the process in order to reduce errors, shorten the time to delivery and lessen the burden on all involved teams."
      },
      {
          title: "Myrtle consulting (Kellogs -Data Aggregation)",
          description: "GDT will help evolve clients IIoT infrastructure to capture, monitor, analyze and take action on many of their manufacturing lines.  Data aggregation from various sensor sources and state-of-the-art infrastructure upgrades will drive efficiency and accuracy on the production line."
      },
      {
          title: "Monsaton Integration",
          description: "Monsanto is one of GDT’s key clients they provide managed services for.  Monsanto uses BMC Remedy as their ticketing system.  They would like to integrate their system with GDT’s ServiceNow instance to enable cross-company ticket sharing and joint ticket resolution."
      },
      {
          title: "Loomis",
          description: "GDT has created a modular system for a connected “Truck of the Future” that combines secure transport, fleet tracking, remote monitoring, and vehicle diagnostics into a single pane of glass using technologies like 4G, RFID, GPS, and OBDII."
      },
      {
          title: "Spark Bridge",
          description: "Integration of Spark into CILC environment to include: Virtual tour via Spark space, Professional Learning Network to select topics related to interest and grade level, and Hot Topic Notifications to increase participation in Spark Professional Learning Network for popular spaces."
      },
      {
          title: "NSO",
          description: "Opportunity to develop a NSO management portal for Internet2 and Universities across the country.  Sponsored by Cisco, GDT will install and connect NSO platforms at various Universities and build a cloud portal to allow service chaining between nodes.  This will allow researches to share infrastructure across University boundaries by building topologies through the campus network and into Internet2."
      },
      {
          title: "US Cellular",
          description: "Customer is looking for best practices and assessments to help derive value from common tasks.  Particularly, they have identified their SOX compliance and Cisco USC patching processes as being potential candidates for additional automation.  GDT will engage to examine processes and make recommendations on improvements via tooling, automation or workflow changes."
      }
    ]
  }
];