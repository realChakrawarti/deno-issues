CREATE TABLE `tests` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updatedAt` text
);
--> statement-breakpoint
DROP TABLE `quests`;--> statement-breakpoint
DROP TABLE `subTasks`;--> statement-breakpoint
DROP TABLE `tasks`;